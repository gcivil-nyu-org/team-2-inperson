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
    <div>
      <img class="logoimg" src="/shortlist-logo-home.png" alt="shortlistlogo" />
    </div>
    <div class="start" v-if="loginState == false">
      <button
        class="btn btn-big btn-success"
        style="font-family: Klee One; size: 10%"
        @click="$router.push('signup')"
      >
        Get Started!
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
        Set Your Preferences!
      </button>
    </div>
    <div style="margin-top: 90px" v-if="loginState == true">
      <p class="descsub">
        With Shortlist, you don’t search for a high school you’ve heard of, or
        one you think you’ll get into, or one your parents want you to apply
        for…
      </p>
      <p class="descsub">
        we’ll show you options, and over time your best-matching schools might
        surprise you.
      </p>
      <p class="descsub">- Team Shortlist</p>
    </div>
  </div>
</template>
<style scoped>
.home {
  display: -moz-grid-line;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 75px;
}

.descdiv {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.desc {
  color: #ffffff;
  font-size: small;
  position: relative;
  text-transform: uppercase;
  -webkit-text-stroke: 0.1vw #ffffff;
  font-family: "Cabin Sketch";
  margin-left: 7px;
}
.start {
  margin-left: 42%;
  padding-top: 10px;
}
.descsub {
  font-family: "Aleo", sans-serif;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 0px;
  background: #15620f;
  color: #ffffff;
  opacity: 0.6;
  font-size: medium;
}
.desc::before {
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #0d4f0b;
  overflow: hidden;
  position: absolute;
  content: attr(data-text);
  -webkit-text-stroke: 0vw #000000;
  animation: animate 6s linear infinite;
}

@keyframes animate {
  100%,
  10%,
  100% {
    width: 0;
  }

  70%,
  100% {
    width: 100%;
  }
}

.logoimg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.button {
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  display: inline-block;
}
.start-btn-container {
  margin-top: 10%;
  margin-bottom: 2%;
}
.btn-big {
  width: 200px;
  height: 80px;
}

a:link {
  text-decoration: none;
}
</style>
