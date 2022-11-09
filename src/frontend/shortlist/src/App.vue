<script setup>
import { RouterView, useRouter } from "vue-router";

import NavBar from "./components/layout/navigation/NavBar.vue";
import ShortlistApi from "@/api/shortlist";
import { sessionStore } from "./states/sessionStore.js";

const apiClient = new ShortlistApi("https://api.shortlist.nyc");
const router = useRouter();
const appSessionStore = sessionStore();

function appAccountSignup(payload) {
  let apiReq = {
    email: payload.email,
    password: payload.password,
    firstName: payload.firstName,
    lastName: payload.lastName,
  };

  let success = () => {
    router.replace("/login");
  };

  let failure = (err) => {
    console.log("could not create!", err.response);
    alert("could not create acount:" + err.response.data);
  };
  let req = apiClient.signupUser(apiReq, success, failure);
  req.execute();
}

function appAccountLogin(payload) {
  console.log("accountLogin", payload, appSessionStore);
  appSessionStore.loginState = true;
  router.replace("/");
}

function appAccountUpdatePreferences(payload) {
  console.log("accountUpdatePreferences", payload, appSessionStore);
  appSessionStore.accountMetadata.preferences = payload;
}
</script>

<template>
  <NavBar />
  <div class="app-container">
    <RouterView
      @appAccountLogin="appAccountLogin"
      @appAccountSignup="appAccountSignup"
      @appAccountUpdatePreferences="appAccountUpdatePreferences"
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
