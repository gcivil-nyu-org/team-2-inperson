<script>
import NavLink from "../layout/NavLink.vue"



export default {
  name: "NavLinks",
  components: {NavLink},
  setup() {
    const links = [
      {text: "Home", href2: "http://www.google.com", color: "#FF00FF"},
      {text: "About", href2: "http://www.google.com"},
      {text: "List View"},
      {text: "Logout"}
    ];
    return {links};
  }
}
</script>

<template>
  <div class="nav-link-container">
    <template v-for="link in links" :key="link">
      <NavLink :text="link.text" :href2="link.href2" :color="link.color"/>
    </template>

    <!--
    <NavLink text="Home" href2="http://www.google.com" color="blue"/>
    -->
  </div>
</template>

<style scoped>
.nav-link-container {
  font-size: 20px;
  width: 500px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: yellow;
}


</style>