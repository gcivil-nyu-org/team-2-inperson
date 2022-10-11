<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/layout/navigation/Navbar.vue"
</script>

<template>
  <div class="app-container">
    <Navbar></Navbar>
    <RouterView />
  </div>
</template>

<style scoped>
.app-container{
  width: 100vw;
  height: 100vh;
}
</style>
