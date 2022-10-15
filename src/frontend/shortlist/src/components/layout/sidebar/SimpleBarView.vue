<script>
// import SimLeftBar from "./SimLeftBar.vue"
import SimRightBar from './SimRightBar.vue'
import SimLeftBar from './SimLeftBar.vue'

export default {
  name: "SimpleBarView",
  components: { SimRightBar, SimLeftBar},
}
</script>

<template>
  <div class="bar-container" >
      <SimLeftBar></SimLeftBar>
      <div style="height: 100%; flex-grow: 1"></div>
      <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-around;">
        <slot></slot>
      </div>
      <div style="height: 100%; flex-grow: 1"></div>
      <SimRightBar></SimRightBar>
  </div>
</template>

<style scoped>
.bar-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  
}

</style>