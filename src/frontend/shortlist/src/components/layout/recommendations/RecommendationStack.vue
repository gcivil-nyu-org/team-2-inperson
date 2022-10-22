<script>
import SchoolCard from "../../school/SchoolCard.vue";

export default {
  name: "RecommendationStack",
  props: ["recommendations"],
  components: { SchoolCard },
  created() {
    //constants for the offset factors
    this.offsetFactor = 15;
  },
};
</script>

<template>
  <div class="reco-stack-container">
    <template v-for="(reco, idx) in recommendations" :key="idx">
      <template v-if="idx == 0">
        <div
          class="reco-stack-grid-position"
          :style="{
            marginLeft:
              offsetFactor * (recommendations.length - idx + 1) + 'px',
            marginTop: offsetFactor * idx + 'px',
            zIndex: 200 * (recommendations.length - idx + 1),
          }"
        >
          <SchoolCard :schoolData="reco" />
        </div>
      </template>
      <template v-else>
        <div
          class="reco-stack-grid-position"
          :style="{
            marginLeft:
              offsetFactor * (recommendations.length - idx + 1) + 'px',
            marginTop: offsetFactor * idx + 'px',
            zIndex: 200 * (recommendations.length - idx + 1),
          }"
        >
          <SchoolCard :schoolData="reco" />
        </div>
      </template>
    </template>
  </div>
</template>

<style>
.reco-stack-container {
  display: grid;
}
.reco-stack-grid-position {
  grid-area: 1 / 1 / 1 / 1;
}
</style>
