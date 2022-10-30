<script>
import Navbar from "./../Navbar.vue";
import Loginview from "./Loginview.vue";
import Signupview from "./Signupview.vue";
import Logo from "./../Logo.vue";

export default {
  name: "HomepageSwitch",
  components: { Navbar, Loginview, Signupview, Logo },
  data() {
        return {
            tab1: "/login",
            tab2: "/signup",
        }
    }
};
</script>

<template>
  <div class="homepage">
    <!-- Navbar -->
    <Navbar />
    <!-- Logo  -->
    <Logo />
    <!-- Switch -->
    <div>
        <login-form v-if="tab === 'login'" />
        <register-form v-if="tab === 'signup'" />
        <button @click="tab1 === 'login' ? 'login' : '/login'">Log in</button>
        <button @click="tab2 = tab2 === 'signup' ? 'signup' : '/signup'">Sign up</button>
    </div>

  </div>
</template>

<style scoped>
.switch-container {
  position: absolute;
  left: 70%;
  top: 50%;
  height: 450px;
  margin-top: -150px;
  width: 450px;
  margin-left: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bcd6a2;
}
</style>
