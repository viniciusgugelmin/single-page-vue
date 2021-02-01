const initialState = () => {
  return {
    user: {
      name: '',
      email: '',
    },
  }
}

const state = initialState()

const getters = {
  get: (state) => {
    return state.user;
  },
}

// actions
const actions = {
  login({ commit, getters, state }, user) {
    return new Promise((resolve, reject) => {
      let resolved = false;
      const item = user;

      if(item) {
        resolved = true;
        resolve();
      }

      commit('SET', user);

      if(!resolved) {
        resolve();
      }
    });
  },

  update({ commit, getters, state }, user) {
    return new Promise((resolve, reject) => {
      let resolved = false;
      const item = user;

      if(item) {
        resolved = true;
        resolve();
      }

      commit('UPDATE', user);

      if(!resolved) {
        resolve();
      }
    });
  },

  logout({ commit, getters, state }, user) {
    commit('RESET', user);
  }
}

// mutations
const mutations = {
  LOGIN (state, user) {
    this.commit('CLEAR_STATES');
    this.commit('user/RESET');

    state.user = user;
  },

  SET (state, payload) {
    state.user = Object.assign({}, state.user, payload);
  },

  UPDATE (state, user) {
    state.user = Object.assign({}, state.user, user);
  },

  LOGOUT () {
    this.commit('user/RESET');
  },

  RESET (state) {
    Object.assign(state, initialState())
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {}
}
