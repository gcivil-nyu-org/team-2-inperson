<script>
import SimCard from "./SimpleView/SimCard.vue"


export default {
  name: "SimpleView",
  components: { SimCard },
}

</script>

<template>
  <div class="sim-container">
      <SimCard></SimCard>
  </div>
  
</template>

<style scoped>
.sim-container {
  width: 400px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: red;
}
</style>