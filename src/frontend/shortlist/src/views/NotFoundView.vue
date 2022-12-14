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
    <div>
      <button @click="$router.replace('/')" class="btn btn-outline-dark">
        Shortlist Home
      </button>
    </div>
    <div>
      <button @click="$router.replace('/about')" class="btn btn-outline-dark">
        Shortlist About
      </button>
    </div>

    <div>
      <button
        @click="$router.replace('/signup')"
        class="btn btn-outline-dark"
        v-if="!loginState"
      >
        Shortlist Signup
      </button>
    </div>
    <div>
      <button
        @click="$router.replace('/login')"
        class="btn btn-outline-dark"
        v-if="!loginState"
      >
        Shortlist Login
      </button>
    </div>
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
  font-size: 28px;
  font-weight: 500;
  font-family: "Aleo", serif;
}
.options {
  margin-bottom: 10%;
  margin-left: 25%;
  font-size: 20px;
  font-weight: 200;
  font-family: "Aleo", serif;
}

.options div {
  padding-top: 10px;
}
</style>
