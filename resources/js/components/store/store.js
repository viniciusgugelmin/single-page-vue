import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user/user';

export const store = new Vuex.Store({
  namespace: true,
  modules: {
    user,
  },
  mutations: {
    CLEAR_STATES() {
      this.commit('user/RESET');
    }
  },
});

export default store;
