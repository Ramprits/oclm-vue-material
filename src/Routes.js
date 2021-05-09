import Vue from "vue";
import Router from "vue-router";
import store from "./store/index.js";
import Layout from "@/components/Layout/Layout";

// Pages
import Dashboard from "@/pages/Dashboard/Dashboard";
import Orders from "@/pages/Orders/Orders";
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";

Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/login",
      name: "Login",
      meta: { requiresUnAuth: true },
      component: Login,
    },
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard,
          meta: { requiresAuth: true },
        },
        {
          path: "orders",
          name: "Orders",
          component: Orders,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});

router.beforeEach(function(to, _, next) {
  console.log(store.getters["authenticated"]);
  if (to.meta.requiresAuth && !store.getters["authenticated"]) {
    next("/login");
  } else if (to.meta.requiresUnAuth && store.getters["authenticated"]) {
    next("/dashboard");
  } else {
    next();
  }
});
export default router;
