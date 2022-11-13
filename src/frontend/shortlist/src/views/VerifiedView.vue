<script>
import axios from "axios";
export default {
  data() {
    return {
      isVerified: false,
      email: "",
      errorMessage: "",
    };
  },
  created() {
    //fetching information from url sent to the email address
    let urlParams = new URLSearchParams(window.location.search);
    this.isVerified = console.log(urlParams.get("token-valid"));
    this.errorMessage = console.log(urlParams.get("message"));
    this.email = console.log(urlParams.get("email"));
  },
  methods: {
    resendLink() {
      axios
      //Maybe changed in the future depend on endpoint
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
    <!-- Display based on verification status -->
    <template v-if="isVerified">
      <h1>Verified successfully</h1>
      <a :href="www.shortlist.nyc / login"> Click here to login! </a>
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
