<script setup>
import { RouterView, useRouter } from "vue-router";

import NavBar from "./components/layout/navigation/NavBar.vue";
import ShortlistApi from "@/api/shortlist";
import { sessionStore } from "./states/sessionStore.js";
import cookie from "@/helpers/cookie.js";

const apiClient = new ShortlistApi("https://api.shortlist.nyc");
const router = useRouter();
const appSessionStore = sessionStore();

function markSchoolAsTrashed(payload) {
  console.log(payload);
  let success = (response) => {
    console.log("Marked the schoolCard as being trashed");
    console.log(response);
  };
  let failure = (err) => {
    console.log(
      "Failed to mark the schoolCard as being trashed",
      err.response.data
    );
  };
  let req = apiClient.updateRecommendation(payload, success, failure);
  req.execute();
}

function markSchoolAsAccepted(payload) {
  let success = () => {
    console.log("Marked as accepted: ", payload.recoID);
  };
  let failure = (err) => {
    console.log(
      "Failed to mark as being accepted to one of the lists",
      err.response.data
    );
  };
  let req = apiClient.updateRecommendation(payload, success, failure);
  req.execute();
}

function appAccountSignup(payload) {
  let apiReq = {
    email: payload.email,
    password: payload.password,
    firstName: payload.firstName,
    lastName: payload.lastName,
  };

  let success = () => {
    //router.replace("/login");
    router.push({
      path: "login",
      query: { firstTimeSignup: true },
    });
  };

  let failure = (err) => {
    console.log("could not create account", err.response.data);
    alert("Could not create an account");
  };
  let req = apiClient.signupUser(apiReq, success, failure);
  req.execute();
}

function appAuthLogin(payload) {
  let requestPayload = {
    email: payload.email,
    password: payload.password,
  };
  let success = (result) => {
    appSessionStore.loginState = true;
    appSessionStore.accountMetadata.user_id = result.data.user_id;
    appSessionStore.accountMetadata.email = result.data.email;
    appSessionStore.accountMetadata.username = result.data.username;
    appSessionStore.accountMetadata.tokens = result.data.tokens;

    // console.log("success: ", appSessionStore.accountMetadata);
    cookie.setCookie("accountid", result.data.user_id, 1); // expires in 1 day
    router.replace(payload.redirect || "/categorize");
  };
  let fail = (err) => {
    console.log(err.response.data);
    if (err.response.data.detail == "Email is not verified") {
      alert("Please verify your email address before logging in.");
    } else {
      alert("Could not login.");
    }
  };
  let req = apiClient.authLogin(requestPayload, success, fail);
  req.execute();
}

function appAccountUpdatePreferences(payload) {
  let requestPayload = {
    user_id: appSessionStore.accountMetadata.user_id,
    user_name: appSessionStore.accountMetadata.user_name,
    email: appSessionStore.accountMetadata.email,
    preferences: appSessionStore.accountMetadata.preferences,
  };
  requestPayload.preferences.recommendationPreferences = payload;
  requestPayload.preferences.recommendationPreferences.update = true;

  let success = () => {
    appSessionStore.accountMetadata.preferences.recommendationPreferences =
      payload;
  };
  let fail = (err) => {
    console.log(err.response.data);
  };
  let req = apiClient.updatePreferences(requestPayload, success, fail);
  req.execute();
}

function appAccountUpdateName(payload) {
  let requestPayload = {
    user_id: appSessionStore.accountMetadata.user_id,
    user_name: appSessionStore.accountMetadata.user_name,
    email: appSessionStore.accountMetadata.email,
    preferences: appSessionStore.accountMetadata.preferences,
  };
  requestPayload.preferences.userFirstName = payload.userFirst;
  requestPayload.preferences.userLastName = payload.userLast;
  requestPayload.preferences.recommendationPreferences.update = false;

  let success = () => {
    appSessionStore.accountMetadata.preferences.userFirstName =
      payload.userFirst;
    appSessionStore.accountMetadata.preferences.userLastName = payload.userLast;
  };
  let fail = (err) => {
    console.log(err.response.data);
  };
  let req = apiClient.updatePreferences(requestPayload, success, fail);
  req.execute();
}

function appLogout() {
  appSessionStore.$reset(); // clear store
  cookie.deleteCookie("accountid");
}

function appAddStudent(payload) {
  console.log(payload);
  let requestPayload = {
    accountId: appSessionStore.accountMetadata.accountId,
    addEmail: payload,
  };
  //requestPayload.preferences.recommendationPreferences = payload;

  let success = () => {
    //appSessionStore.accountMetadata.preferences.recommendationPreferences = payload;
  };
  let fail = (err) => {
    console.log(err);
  };
  let req = apiClient.addStudent(requestPayload, success, fail);
  req.execute();
}
</script>

<template>
  <NavBar />
  <div class="app-container">
    <span style="overflow-y: scroll; height: 100%">
      <RouterView
        @appAccountLogin="appAuthLogin"
        @appAccountSignup="appAccountSignup"
        @appAccountUpdatePreferences="appAccountUpdatePreferences"
        @appAccountUpdateName="appAccountUpdateName"
        @logoutEvent="appLogout"
        @addStudent="appAddStudent"
        @markSchoolAsAccepted="markSchoolAsAccepted"
        @markSchoolAsTrashed="markSchoolAsTrashed"
      />
    </span>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  margin: 0;
  height: 100%;
  overflow: auto;
}
</style>
