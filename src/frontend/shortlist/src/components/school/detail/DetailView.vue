<script>
import DetailCard from "../detail/DetailCard.vue"


export default {
  name: "SimpleView",
  components: { DetailCard },
}
</script>

<template>
  <div class="sim-container">
      <DetailCard></DetailCard>
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