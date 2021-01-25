import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: { registerForm: false },
      component: Login
    },
    {
      path: '/signup',
      name: 'Sign up',
      meta: { registerForm: true },
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '*',
      redirect: {name: 'Home'}
    }
  ]
})
