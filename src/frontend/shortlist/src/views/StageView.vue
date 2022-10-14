<script>
import DetailCard from "../components/school/detail/DetailCard.vue";
import SimCardDemo from "../components/school/simple/SimCardDemo.vue";
export default {
    name: "StageView",
    components: { DetailCard, SimCardDemo }
}
</script>

<template>
    <div class="container">
      <DetailCard></DetailCard>
      <!-- <SimCardDemo></SimCardDemo> -->
    </div>
</template>

<style scoped>
</style>