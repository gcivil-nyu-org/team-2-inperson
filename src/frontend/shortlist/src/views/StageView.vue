<script>
import DetailCardDemo from "../components/school/detail/DetailCard.vue";
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
</style>