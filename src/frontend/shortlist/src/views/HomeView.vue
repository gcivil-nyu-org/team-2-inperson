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
      <div class="dash-actions-container">
        <div class="action">
          <button
            class="btn btn-outline-success"
            @click="$router.push('categorize')"
            id = "smallTitle"
          >
            Get Matches
          </button>
              <div> 
      <!-- <p class = "instruction-dash"> Simply click on the school card, you will see the detailed information. Drag and drop cards to a list where you think it belongs.
        </p> -->
      </div> 
        </div>
        <div class="action">
          <button class="btn btn-outline-success" id = "smallTitle">My Students</button>
        </div>
        <div class="action">
          <button
            class="btn btn-outline-success"
            @click="$router.replace('profile')"
            id = "smallTitle"
          >
            My Preferences
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.instruction-dash {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 1;
  margin-top: 5%;
  font-size: 15px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  color: #008037;
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
.button {
  margin-top: 5%;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.bigTitle {
  margin-top: 5%;
  margin-left: 30%;
  font-size: 50px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  color: #008037;
}
#smallTitle {
  margin-top: 5%;
  font-size: 15px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  color: #008037;
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

.btn-big {
  width: 200px;
  height: 80px;
  /* font-family: "Cabin Sketch"; */
}

.dash-container {
  margin: auto;
  width: 50%;
  height: 100%;
  border: 3px solid green;
  padding: 10px;
  border-style: inset;
  border-radius: 25px;
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
