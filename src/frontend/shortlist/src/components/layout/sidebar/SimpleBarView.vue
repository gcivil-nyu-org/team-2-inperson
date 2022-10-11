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
      <SimRightBar></SimRightBar>
      <SimLeftBar></SimLeftBar>
  </div>
</template>

<style scoped>
.bar-container {
  width: 100%;
  height: 100%;
  float:left;
  margin-left:auto;
  margin-right:auto;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color:green;
}

</style>