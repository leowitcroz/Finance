import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    data: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    },
    setData(state, data) {
      state.data = data;
    },
    clearData(state) {
      state.data = null;
    },
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setToken', token);
    },
    removeToken({ commit }) {
      commit('clearToken');
    }, 
    saveData({ commit }, data) {
      commit('setData', data);
    },
    removeData({ commit }) {
      commit('clearData');
    },
  },
  getters: {
    getToken: state => state.token,
    getData: state => state.data,
  }
})
