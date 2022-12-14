<script>
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      isVerified: false,
      email: "",
      errorMessage: "",
      testPostSent: false,
    };
  },
  setup() {
    return { router: useRoute() };
  },
  mounted() {
    //fetching information from url sent to the email address
    //let params = this.router.query;
    if (this.$route) {
      let params = this.$route.query;
      //somehow this line makes thing works, so param does not provide bool but string
      this.isVerified = params.token_valid == "True";
      this.errorMessage = params.message;
    }
  },
  methods: {
    resendLink() {
      //console.log(this.router.query);
      axios
        //link needs update after deployment
        .post("https://api.shortlist.nyc/auth/request-resend-email", {
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
    <!-- Display based on verification status -->
    <!-- Either resend link or redirect to login depend on verification status-->
    <template v-if="this.isVerified">
      <form>
        <h3 class="header">Verified successfully</h3>
        <a href="http://www.shortlist.nyc/login?firstTime=true" id="loginLink">
          Click here to login!
        </a>
      </form>
    </template>
    <template v-else>
      <form>
        <div class="message-container">
          <h3 class="header">{{ errorMessage }}</h3>
        </div>
        <div class="input-container" id="emailaddress">
          <input
            type="email"
            class="emailInput"
            placeholder="Your email"
            v-model="email"
          />
        </div>
        <div class="button-container">
          <button
            @click="this.resendLink"
            id="resendButton"
            class="btn btn-outline-dark"
          >
            Resend Verification Link
          </button>
        </div>
      </form>
    </template>
  </div>
</template>

<style scoped>
.verify-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.header {
  font-size: 28px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}

.input-container {
  padding-bottom: 10px;
}
</style>
