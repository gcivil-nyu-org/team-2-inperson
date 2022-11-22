<script>
import Signup from "../components/layout/signup_login/Signup.vue";
export default {
  emits: ["appAccountSignup"],
  components: {
    Signup,
  },
};
</script>

<template>
  <div>
    <Signup @appAccountSignup="(p) => this.$emit('appAccountSignup', p)" />
  </div>
</template>

<style scoped></style>