<script>
import SimList from './SimList.vue'
export default {
  name: "SimRihtBar",
  components: {SimList},
}
</script>
<template>
  <div class="simRightBar-container" >
      <SimList></SimList>
  </div>
</template>

<style scoped>
.simRightBar-container {
  width: 28%;
  height: 100%;
  float: right;
  justify-content: space-between;
  align-items: right;
  background-color:rgb(10, 10, 10, .2);
}
</style>