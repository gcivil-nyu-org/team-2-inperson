<script>
import { inject } from "vue";
export default {
  name: "PreferenceManagerPage",
  props: ["id", "subtitle"],
  setup() {
    const selectedPage = inject("selectedPage");
    return {
      selectedPage,
    };
  },
};
</script>

<template>
  <div
    v-show="id == selectedPage"
    style="margin: 10px 0px 10px 0px; width: 100%; max-height: 100px"
  >
    <div class="pref-section-header">{{ subtitle }}</div>
    <slot></slot>
  </div>
</template>

<style scoped>
.pref-section-header {
  font-size: 20px;
  font-family: "Aleo", serif;
  background-color: #d6cda4;
  font-weight: bold;
  color: black;
  padding: 8px;
}
</style>
