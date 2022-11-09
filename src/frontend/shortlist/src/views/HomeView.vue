<script>
import { mapState } from "pinia";
import { sessionStore } from "../states/sessionStore";

export default {
  name: "Home",
  computed: {
    ...mapState(sessionStore, {
      loginState: "loginState",
      accountMetadata: "accountMetadata",
    }),
  },
};
</script>

<template>
  <main>
    {{ loginState }} {{ accountMetadata }}
    <div class="home-container" v-if="loginState == false">
      <div class="shortlist-fnt-serif-med">
        <h1>Welcome to Shortlist</h1>
      </div>
      <div class="start-btn-container">
        <button
          class="btn btn-big btn-outline-dark"
          @click="$router.push('signup')"
        >
          Get Started
        </button>
      </div>
      <div class="login-link-container">
        <router-link to="/login">
          <span class="shortlist-fnt-serif-med">Already have an account?</span>
        </router-link>
      </div>
    </div>
    <div class="dash-container" v-else>
      <h1>{{ accountMetadata.userFirstName }}'s Dashboard</h1>
      <div class="dash-actions-container">
        <div class="action">
          <button
            class="btn btn-outline-success"
            @click="$router.push('categorize')"
          >
            Get Matches
          </button>
        </div>
        <div class="action">
          <button class="btn btn-outline-success">My Students</button>
        </div>
        <div class="action">
          <button
            class="btn btn-outline-success"
            @click="$router.replace('profile')"
          >
            My Preferences
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.home-container {
  width: 100%;
  height: 100%;
  display: grid;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #bcd6a2;
  padding-top: 100px;
  padding-bottom: 100px;
}

.start-btn-container {
  margin-top: 10%;
  margin-bottom: 2%;
}

.btn-big {
  width: 200px;
  height: 80px;
  font-family: "Cabin Sketch";
}

.dash-container {
  margin: auto;
  width: 50%;
  height: 100%;
  border: 3px solid green;
  padding: 10px;
}
.dash-actions-container {
  display: grid;
}

.action {
  padding: 20px;
}

a:link {
  text-decoration: none;
}
</style>
