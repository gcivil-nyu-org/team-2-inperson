<script>
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      isVerified: false,
      email: "",
      errorMessage: "",
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
    this.email = params.email;
    console.log(this.email);
    console.log(this.errorMessage);
  },
  methods: {
    resendLink() {
      console.log(this.router.query);
      axios
        .post("/send-email", {
          email: this.email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<template>
  <div class="verify-container">
    {{ $router.query }}
    <!-- Display based on verification status -->
    <template v-if="isVerified">
      <h1>Verified successfully</h1>
      <a href="https://www.shortlist.nyc/login"> Click here to login! </a>
    </template>
    <template v-if="!isVerified">
      <div>Problem: {{ errorMessage }}</div>
      <button @click="this.resendLink" class="btn btn-outline-dark">
        Resend Verification Link
      </button>
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
