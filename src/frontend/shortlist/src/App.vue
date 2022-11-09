<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/layout/navigation/NavBar.vue";
import EventListener from "./EventListener.vue";
</script>

<template>
  <EventListener />
  <NavBar />
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
