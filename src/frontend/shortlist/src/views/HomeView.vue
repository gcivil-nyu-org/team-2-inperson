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
  <h6 class="desc" data-text="Find Your Dream School Here.">
    Find Your Dream School Here.
  </h6>
  <div class="home">
    <div><img class="logoimg" src="/shortlist-logo-home.png" /></div>
    <div class="descdiv"></div>
    <div>
      <img class="featuresimg" src="/shortlist-features.png" />
    </div>
    <div class="start" v-if="loginState == false">
      <button
        class="btn btn-big btn-dark"
        style="font-family: Klee One; size: 10%"
        @click="$router.push('signup')"
      >
        Get Started
      </button>
      <router-link to="/login">
        <div style="font-family: Klee One; color: black">
          Already have an account?
        </div>
      </router-link>
    </div>
    <div class="start" v-else>
      <button
        class="btn btn-big btn-outline-dark"
        style="font-family: Klee One; size: 10%"
        @click="$router.push('profile')"
      >
        Let's Set Preferences!
      </button>
    </div>
    <div style="margin-top: 90px">
      <p class="descsub">
        With Shortlist, you don’t search for a High School you’ve heard of, or
        one you think you’ll get into, or one your parents want you to apply
        for…
      </p>
      <p class="descsub">
        we’ll show you options, and over time your best-matching schools might
        surprise you.
      </p>
      <p class="descsub">- Team Shortlist</p>
    </div>
    <div
      class="descsub"
      style="background: white; opacity: 1; padding-top: 7px"
    >
      <img class="avatardev" src="/AdelaideZhangDevShortlist.jpeg" />
      <img class="avatardev" src="/Simao(Alice)ChenDevShortlist.jpg" />
      <img class="avatardev" src="/DanielWaltDevShortlist.jpeg" />
      <img class="avatardev" src="/PoojaPatelDevShortlist.jpg" />
      <img class="avatardev" src="/VaibhavJainDegShortlist.jpg" />
      <img class="avatardev" src="/YeXuDevShortlist.jpg" />
    </div>
  </div>
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
