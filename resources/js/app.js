require('./bootstrap');

import Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      localhost: 'http://127.0.0.1:8000',
      user: {},

      errorMessage: {
        default: 'Your request can\'t be completed right now. Please wait a few minutes before you try again.',
      }
    }
  },

  created() {
    let userLogged = sessionStorage.getItem('user');

    if (userLogged) {
      this.user = JSON.parse(userLogged);
    }
  }
})

new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>',
})
