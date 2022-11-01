<script>
import { userLoginStore } from "../../../states/userLogin";

export default {
  name: "Home",
  setup() {
    const loginState = userLoginStore();
    return { loginState };
  },
  mounted() {
    this.loginState.loggedIn = false;
    this.loginState.userFirstName = null;
    this.loginState.userEmail = null;
    this.loginState.userPassword = null;
  },
}

</script>

<template>
  <h3>You have been logged out.</h3>
</template>