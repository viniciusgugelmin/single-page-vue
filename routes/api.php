<?php

use App\Http\Controllers\Api\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* API */
Route::namespace('Api')->group(function () {

    Broadcast::routes(['middleware' => ['auth:api']]);

    /* USER */
    Route::namespace('User')->prefix('user')->group(function () {

        /* Users */
        //
        // Register an user
        Route::post('/register', [UserController::class, 'register']);
        // Log in as user
        Route::post('/login', [UserController::class, 'login']);
        // [RESTRICTED]
        Route::middleware(['auth:api'])->group(function () {
            // Get user data
            Route::get('/', [UserController::class, 'get']);
            // Edit user data
            Route::put('/edit', [UserController::class, 'edit']);
        });
    });
});

