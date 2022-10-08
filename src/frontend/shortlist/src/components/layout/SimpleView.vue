<script>
import SimCard from "../../components/school/simple/SimCard.vue"


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
  height: 550px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color:red
}
</style>