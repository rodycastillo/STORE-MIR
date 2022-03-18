import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    accessToken: "",
    login: false,
    err: null,
  },
  mutations: {
    SET_LOGINUSER: (state, data) => {
      state.user = data;
    },
    DELETE_USER: (state) => {
      console.log(state.user, "state.user");
      state.user = {};
    },
  },
  actions: {
    async signIn({ commit }, payload) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/signin",
          payload
        );
        console.log(response.data);
        commit("SET_LOGINUSER", response.data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    },
    signOut({ commit }) {
      commit("DELETE_USER");
    },
    async signUp({ commit }, payload) {
      try {
        const resp = await axios.post(
          "http://localhost:8080/api/auth/signup",
          payload
        );
        commit();
        console.log(resp);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    },
  },
  modules: {},
});
