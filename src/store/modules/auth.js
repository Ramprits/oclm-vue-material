import axios from "axios";
import router from "@/Routes";
import {
  LOGIN,
  REGISTER,
  SET_ERROR,
  SET_USER,
  LOAD_USER,
  LOG_OUT,
} from "../constant";
const state = {
  user: null,
  token: null,
  isAuthenticated: false,
};
const actions = {
  [LOGIN]({ commit }, { identifier, password }) {
    axios
      .post(`/auth/local`, {
        identifier,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        commit(SET_USER, response.data);
        const redirect = "/" + (router.query?.redirect || "dashboard");
        router.push(redirect);
      })
      .catch((error) => {
        commit(SET_ERROR, error.message);
      });
  },
  [REGISTER]({ commit }, { username, email, password }) {
    axios
      .post(`/auth/local/register`, {
        username,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        commit(SET_USER, response.data);
        router.push("/dashboard");
      })
      .catch((error) => {
        commit(SET_ERROR, error.message);
      });
  },

  [LOAD_USER]({ commit }, payload) {
    commit(SET_USER, payload);
  },

  [SET_ERROR]({ commit }, payload) {
    commit(SET_ERROR, payload);
  },

  [LOG_OUT]({ commit }) {
    commit(LOG_OUT);
  },
};
const mutations = {
  [SET_USER](state, payload) {
    state.user = payload.user;
    state.token = payload.jwt;
    state.isAuthenticated = true;
  },
  [SET_ERROR](state, payload) {
    state.error = payload;
  },
  [LOG_OUT](state) {
    state.user = null;
    state.token = null;
    state.isAuthenticated = false;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  },
};
const getters = {
  authenticated(state) {
    return state.isAuthenticated;
  },

  user(state) {
    return state.user;
  },

  token(state) {
    return state.token;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
