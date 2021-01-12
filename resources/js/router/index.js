import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home";
import Login from "@/pages/Login";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
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
      path: '*',
      redirect: {name: 'Home'}
    }
  ]
})
