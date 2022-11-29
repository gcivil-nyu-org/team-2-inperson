<script setup>
import { RouterView, useRouter } from "vue-router";

import NavBar from "./components/layout/navigation/NavBar.vue";
import ShortlistApi from "@/api/shortlist";
import { sessionStore } from "./states/sessionStore.js";
import cookie from "@/helpers/cookie.js";

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
    alert("could not create acount");
  };
  let req = apiClient.signupUser(apiReq, success, failure);
  req.execute();
}

function appAccountLogin(payload) {
  console.log("accountLogin", payload, appSessionStore);
  let req = apiClient
    .loginAccount()
    .forEmail(payload.email)
    .forPassword(payload.password)
    .onSuccess((result) => {
      console.log("success:", result.data);
      appSessionStore.loginState = true;
      appSessionStore.accountMetadata = result.data;
      cookie.setCookie("accountid", result.data.accountId, 1); // expires in 1 day
      router.replace("/");
    })
    .onFail((err) => {
      alert("could not login");
      console.log("could not login", err.response);
    });
  req.execute();
}

function appAuthLogin(payload) {
  console.log("accountLogin", payload.email);
  let requestPayload = {
    email: payload.email,
    password: payload.password,
  };

  let success = (result) => {
    alert("Login complete");
    console.log("success: " , result.data);
    appSessionStore.loginState = true;
    appSessionStore.accountMetadata = result.data;
    cookie.setCookie("accountid", result.data.user_id, 1);
    router.replace("/");
  };
  let fail = (err) => {
    console.log(err.response.data);
    if (err.response.data.detail == "Email is not verified") {
      alert("Please verify your email address before logging in.")
    }
    else {
      alert("Could not login.")
    }
  };
  let req = apiClient.authLogin(requestPayload, success, fail);
  req.execute();
  
}

function appAccountUpdatePreferences(payload) {
  let requestPayload = {
    accountId: appSessionStore.accountMetadata.accountId,
    preferences: appSessionStore.accountMetadata.preferences,
  };
  requestPayload.preferences.recommendationPreferences = payload;

  let success = () => {
    appSessionStore.accountMetadata.preferences.recommendationPreferences =
      payload;
  };
  let fail = (err) => {
    console.log(err);
  };
  let req = apiClient.updatePreferences(requestPayload, success, fail);
  req.execute();
}

function appAccountUpdateName(payload) {
  let requestPayload = {
    accountId: appSessionStore.accountMetadata.accountId,
    preferences: appSessionStore.accountMetadata.preferences,
  };
  requestPayload.preferences.userFirstName = payload.userFirst;
  requestPayload.preferences.userLastName = payload.userLast;

  let success = () => {
    appSessionStore.accountMetadata.preferences.userFirstName =
      payload.userFirst;
    appSessionStore.accountMetadata.preferences.userLastName = payload.userLast;
  };
  let fail = (err) => {
    console.log(err);
  };
  let req = apiClient.updatePreferences(requestPayload, success, fail);
  req.execute();
}

function appLogout() {
  appSessionStore.$reset(); // clear store
  cookie.deleteCookie("accountid");
  console.log(appSessionStore.accountMetadata.accountId);
}
</script>

<template>
  <NavBar />
  <div class="app-container">
    <RouterView
      @appAccountLogin="appAuthLogin"
      @appAccountSignup="appAccountSignup"
      @appAccountUpdatePreferences="appAccountUpdatePreferences"
      @appAccountUpdateName="appAccountUpdateName"
      @logoutEvent="appLogout"
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
