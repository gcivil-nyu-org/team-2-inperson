<script>
import DetailCardDemo from "../components/school/detail/DetailCardDemo.vue";
import SimCardDemo from "../components/school/simple/SimCardDemo.vue";
export default {
    name: "StageView",
    components: { DetailCardDemo, SimCardDemo }
}
</script>

<template>
    <div class="container">
      <DetailCardDemo></DetailCardDemo>
      <!-- <SimCardDemo></SimCardDemo> -->
    </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>