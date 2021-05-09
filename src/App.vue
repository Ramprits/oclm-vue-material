<template>
  <router-view />
</template>

<script>
import { LOAD_USER } from "./store/constant.js";
export default {
  name: "App",
  created() {
    const jwt = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (jwt && user) {
      this.$store.dispatch(LOAD_USER, { user, jwt });
    }
  },
};
</script>

<style src="./styles/app.scss" lang="scss" />
