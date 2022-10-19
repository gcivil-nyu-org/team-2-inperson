<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/layout/navigation/Navbar.vue"

console.log("Version C");
</script>

<template>
  <Navbar/>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
.app-container{
  width: 100vw;
  height: 100vh;
}
</style>