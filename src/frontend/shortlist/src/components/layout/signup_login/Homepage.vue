<script>
import Navbar from "./Navbar.vue";
import Login from "./Login.vue";
import Signup from "./Signup.vue";
import Logo from "./Logo.vue";

export default {
  name: "Homepage",
  components: { Navbar, Login, Signup, Logo },
};
</script>

<template>
  <div class="homepage">
    <!-- Navbar -->
    <Navbar />
    <!-- Logo  -->
    <Logo />
    <!-- Sign Up -->
    <Signup />
    <!-- Log in  -->
    <Login />
  </div>
</template>

<style scoped></style>
