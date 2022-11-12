<script>
import Login from "../components/layout/signup_login/Login.vue";
export default {
  emits: ["appAccountLogin"],
  components: {
    Login,
  },
};
</script>

<template>
  <div>
    <Login @appAccountLogin="(p) => this.$emit('appAccountLogin', p)" />
  </div>
</template>

<style scoped></style>
