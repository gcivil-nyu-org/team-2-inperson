<script>
export default {
  name: "Logo",
};
</script>

<template>
  <div id="logo_image_container">
    <router-link id="logoToHome" to="/" class="nav-item nav-link">
      <img src="/logo.png" id="logo_img"
    /></router-link>
  </div>
</template>

<style scoped>
#logo_img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
}
#logo_image_container {
  position: relative;
  width: 300px;
  height: 300px;
  margin-top: 100px;
}
</style>
