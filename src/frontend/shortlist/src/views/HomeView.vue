<script>
import { mapState } from "pinia";
import { sessionStore } from "../states/sessionStore";

export default {
  name: "Home",
  computed: {
    ...mapState(sessionStore, {
      loginState: "loginState",
      accountMetadata: "accountMetadata",
      prefCompletionState: "prefCompletionState",
    }),
  },
};
</script>

<template>
  <main>
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
      <h1 class="bigTitle">Dashboard</h1>
      <div class="dash-actions-container"></div>
      <div class="action">
        <button
          class="btn btn-outline-success"
          @click="$router.push('categorize')"
          id="smallTitle"
        >
          Get Matches
        </button>
        <button
          class="btn btn-outline-success"
          @click="$router.replace('profile')"
          id="smallTitle"
        >
          My Students
        </button>
        <button
          class="btn btn-outline-success"
          @click="$router.replace('profile')"
          id="smallTitle"
        >
          My Preferences
        </button>
      </div>
    </div>
  </main>
</template>

<style>
@keyframes dashboard {
  from {
    background-color: #7feac6;
  }
  to {
    background-color: #afe1af;
  }
}

.button {
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  display: inline-block;
}

.bigTitle {
  margin-top: 5%;
  margin-left: 38%;
  font-size: 50px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  color: black;
}
#smallTitle {
  margin-left: 5%;
  padding: 20px 60px;
  margin-top: 5%;
  font-size: 25px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  color: black;
}
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

.btn-outline-success {
  display: inline-block;
}
.btn-big {
  width: 200px;
  height: 80px;
}

.dash-container {
  margin: auto;
  width: 75%;
  height: 100%;
  border: 5px solid green;
  padding: 20px;
  border-style: inset;
  border-radius: 30px;
  animation-name: dashboard;
  animation-duration: 5s;
  animation-iteration-count: infinite;
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
