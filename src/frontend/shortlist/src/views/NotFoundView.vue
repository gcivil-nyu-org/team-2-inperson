<script>
import { sessionStore } from "../states/sessionStore";
import { mapState } from "pinia";
export default {
  name: "NotFoundView",
  computed: {
    ...mapState(sessionStore, {
      loginState: "loginState",
      accountMetadata: "accountMetadata",
    }),
  },
};
</script>

<template>
  <h2>
    <p class="instructions" id="bigTitle">Sorry, that page does not exist.</p>
  </h2>
  <h3>
    <p class="instructions" id="smallTitle">Here are some better options:</p>
  </h3>
  <div class="options">
    <router-link to="/">
      <p class="title">Take me home</p>
    </router-link>

    <router-link to="/signup" v-if="!loginState">
      <p class="title">Sign me up</p>
    </router-link>

    <router-link to="/login" v-if="!loginState">
      <p class="title">Log me in</p>
    </router-link>

    <router-link to="/about">
      <p class="title">What is Shortlist again?</p>
    </router-link>
  </div>
</template>

<style>
h4 {
  padding-top: 10%;
  text-align: center;
}
#bigTitle {
  margin-top: 5%;
  margin-left: 25%;
  font-size: 50px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  color: #008037;
}
#smallTitle {
  margin-left: 25%;
  font-size: 35px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  color: #008037;
}
.options {
  margin-bottom: 10%;
  margin-left: 25%;
  font-size: 25px;
  font-weight: 200;
  font-family: "Cabin Sketch", cursive;
}
</style>
