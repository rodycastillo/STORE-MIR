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
    data: [],
  },
  mutations: {
    SET_LOGINUSER: (state, data) => {
      state.user = data;
    },
    DELETE_USER: (state, data) => {
      state.user = data;
    },
    SET_DATA: (state, data) => {
      state.data = data;
    },
  },
  actions: {
    async signIn({ commit }, payload) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/signin",
          payload
        );
        console.log(response.data.token);
        commit("SET_LOGINUSER", response.data);
        localStorage.setItem("token", response.data.token);
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
    async getProducts({ commit }) {
      try {
        const resp = await axios.get("http://localhost:8080/api/products");
        console.log(resp.data.data);
        commit("SET_DATA", resp.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async addProduct({ commit }, payload) {
      try {
        axios.post("http://localhost:8080/api/product", payload);
        commit();
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
