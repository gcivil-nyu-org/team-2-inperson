<script>
import NavLogo from "../layout/NavLogo.vue"
import NavLinks from "../layout/NavLinks.vue"
import NavProfile from "../layout/NavProfile.vue"

export default {
  name: "NavBarTop",
  components: { NavLogo, NavLinks, NavProfile},
}

</script>

<template>
  <div class="nav-container">
      <NavLogo></NavLogo>
      <div style="flex-grow: 1;">&nbsp;</div>
      <NavLinks></NavLinks>
      <NavProfile></NavProfile>
  </div>
  
</template>

<style scoped>
.nav-container {
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: red;
}
</style>