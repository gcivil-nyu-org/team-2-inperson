<script>
import SimButton from './SimButton.vue'
export default {
  name: "SimLetfBar",
  components: {SimButton},
}
</script>

<template>
  <div class="simLeftBar-container" >
      <SimButton></SimButton>
  </div>
</template>

<style scoped>
.simLeftBar-container {
  width: 28%;
  height: 100%;
  float:left;
  /* display: left; */
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: left;
  background-color:yellow;
}
</style>