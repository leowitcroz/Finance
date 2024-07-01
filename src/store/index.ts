import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    }
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setToken', token);
    },
    removeToken({ commit }) {
      commit('clearToken');
    }
  },
  getters: {
    getToken: state => state.token
  }
})
