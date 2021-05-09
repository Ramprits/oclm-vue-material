import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./Routes";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
if (store.getters["token"]) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${store.getters["token"]}`;
}
axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg",
  },
});
Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
