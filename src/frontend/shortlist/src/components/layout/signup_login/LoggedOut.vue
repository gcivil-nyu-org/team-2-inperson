<script>
import { userLoginStore } from "../../../states/sessionStore";

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
};
</script>

<template>
  <div class="container">
    <h3>You have been logged out.</h3>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  width: 50%;
  height: 100%;
  border: 3px solid green;
  padding: 10px;
}
</style>
