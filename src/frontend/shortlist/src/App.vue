<script setup>
import { RouterView, useRouter } from "vue-router";

import NavBar from "./components/layout/navigation/NavBar.vue";
import ShortlistApi from "@/api/shortlist";
import { sessionStore } from "./states/sessionStore.js";

const apiClient = new ShortlistApi("https://api.shortlist.nyc");
const router = useRouter();
const appSessionStore = sessionStore();

function appAccountSignup(payload) {
  console.log("accountSignup", payload, appSessionStore);
  router.replace("/login");
}

function appAccountLogin(payload) {
  console.log("accountLogin", payload, appSessionStore);
  appSessionStore.loginState = true;
  router.replace("/");
}
</script>

<template>
  <NavBar />
  <div class="app-container">
    <RouterView
      @appAccountLogin="appAccountLogin"
      @appAccountSignup="appAccountSignup"
    />
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
