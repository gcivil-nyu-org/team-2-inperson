<script>
export default {
  name: "Home",
  emits: ["logoutEvent"],
  mounted () {
    this.$emit("logoutEvent");
  }
  // TODO: Handle this with events/props
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
