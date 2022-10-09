<script>
import { inject } from 'vue'
export default {
  name: "PreferenceManagerPage",
  props: ["id", "subtitle"],
  setup() {
    const selectedPage = inject("selectedPage");
    
    return {
      selectedPage
    }
    
  }
}
</script>

<template>
  <div v-show="id == selectedPage">
    <div class="pref-section-header">{{subtitle}}</div>
    <slot></slot>
  </div>
</template>

<style scoped>
.pref-section-header{
  font-size: 20px;
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  color: white;
  background-color: green;

}
</style>
