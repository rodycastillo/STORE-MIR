import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    accessToken: "",
    login: false,
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
    async signIn({ commit }, data) {
      try {
        const response = await axios.post(
          "http://localhost:2000/api/auth/signin",
          data
        );
        console.log(response);
        commit("SET_LOGINUSER", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    signOut({ commit }) {
      commit("DELETE_USER");
    },
  },
  modules: {},
});
