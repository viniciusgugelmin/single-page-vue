require('./bootstrap');

import Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { store } from './components/store/store';

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      localhost: 'http://127.0.0.1:8000',

      errorMessage: {
        default: 'Your request can\'t be completed right now. Please wait a few minutes before you try again.',
      }
    }
  },

  created() {
    let userLogged = sessionStorage.getItem('user');

    if (userLogged) {
      this.$store.dispatch('user/login', JSON.parse(userLogged));
    }
  },

  computed: {
    user() {
      return this.$store.getters['user/get'];
    }
  }
})

new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>',
})
