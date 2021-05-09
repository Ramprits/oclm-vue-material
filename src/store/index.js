import Vue from "vue";
import Vuex from "vuex";
import auth from "../store/modules/auth.js";
Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  modules: {
    auth,
  },
  state: {
    drawer: true,
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    TOGGLE_DRAWER({ commit }) {
      commit("toggleDrawer");
    },
  },
  getters: {
    DRAWER_STATE(state) {
      return state.drawer;
    },
    isRootAuthenticated() {
      return false;
    },
  },
});
