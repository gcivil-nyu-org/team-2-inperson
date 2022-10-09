

<script>
import NavBarTop from "../components/layout/NavBarTop.vue";

export default {
    name: "StageViewNavBar",
    components: { NavBarTop }
}
</script>

<template>
  <div class="container">
    <NavBarTop></NavBarTop>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>