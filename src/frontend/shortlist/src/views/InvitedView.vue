<script>
import Signup from "../components/layout/profile/UserDetailsInvite.vue"
export default {
  emits: ["appAccountAcceptInvite"],
  components: {
    Signup,
  },
};
</script>

<template>
  <div>
    <Signup
      @appAccountSignup="(p) => this.$emit('appAccountAcceptInvite', p)"
    />
  </div>
</template>

<style scoped></style>