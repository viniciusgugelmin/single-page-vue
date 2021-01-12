<?php

namespace App\Http\Controllers\Api\User;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->all();

        $validation = Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'message' => $validation->errors(),
            ], 422);
        }

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $user->token = $user->createToken($user->email)->accessToken;

        return response()->json([
            'user' => $user
        ]);
    }

    public function login(Request $request)
    {
        try {

            $data = $request->all();

            $validation = Validator::make($data, [
                'email' => 'required|string|email|max:255',
                'password' => 'required|string|min:6',
            ]);

            if ($validation->fails()) {
                return response()->json([
                    'type' => 'error',
                    'message' => $validation->errors(),
                ]);
            }

            if (!Auth::attempt(['email' => $data['email'], 'password' => $data['password']])) {
                return response()->json([
                    'type' => 'error',
                    'status' => '422',
                    'message' => 'You have entered an invalid email/password'
                ]/* , 422*/);
            }

            $user = auth()->user();
            $user->token = $user->createToken($user->email)->accessToken;

            return response()->json([
                'type' => 'success',
                'user' => $user,
                'message' => 'User logged in.'
            ]);
        }
        catch (\Throwable $e) {
            return response()->json([
                'type' => 'error',
                'status' => '422',
                'message' => 'Your request can\'t be completed right now. Please wait a few minutes before you try again.',
            ]/* , 422*/);
        }
    }

    public function get(Request $request)
    {
        return response()->json([
            'user' => $request->user()
        ]);

    }
}
