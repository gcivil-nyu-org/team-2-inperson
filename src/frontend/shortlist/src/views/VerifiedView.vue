<script>
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      isVerified: false,
      email: "",
      errorMessage: "",
      testVerified: false,
      testNotVerified: false,
      testPostSent: false,
    };
  },
  setup() {
    return { router: useRoute() };
  },
  mounted() {
    //fetching information from url sent to the email address
    let params = this.router.query;
    this.isVerified = params.verified;
    this.errorMessage = params.message;
    //console.log(this.email);
    //console.log(this.errorMessage);
  },
  methods: {
    resendLink() {
      //console.log(this.router.query);
      axios
        //link needs update after deployment
        .post("http://127.0.0.1:8000/auth/request-resend-email", {
          email: this.email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      alert("Check your email! Verification link resent.");
      this.testPostSent = true;
    },
  },
};
</script>
<template>
  <div class="verify-container">
    {{ $router.query }}
    <!-- Display based on verification status -->
    <!-- Either resend link or redirect to login depend on verification status-->
    <template v-if="isVerified">
      <h5 this.testVerified="true">Verified successfully</h5>
      <a href="https://www.shortlist.nyc/login" id="loginLink">
        Click here to login!
      </a>
    </template>
    <template v-if="!isVerified">
      <div this.testNotVerified="true">Problem: {{ errorMessage }}</div>
      <div id="emailaddress">
        <input
          type="email"
          class="emailInput"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div>
        <button
          @click="this.resendLink"
          id="resetButton"
          class="btn btn-outline-dark"
        >
          Resend Verification Link
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.verify-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
