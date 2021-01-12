// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '../resources/js/App.vue';
import router from '../resources/js/router';
import axios from "axios";

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      localhost: 'http://127.0.0.1:8000'
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
