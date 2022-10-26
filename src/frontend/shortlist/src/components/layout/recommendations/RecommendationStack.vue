<script>
import SchoolCard from "../../school/SchoolCard.vue";
import { dragStateStore } from "../../../states/categorizeDragAndDrop";

export default {
  name: "RecommendationStack",
  props: ["recommendations"],
  emits: ["schoolCardDragStart"],
  components: { SchoolCard },
  setup() {
    const dragState = dragStateStore();
    return { dragState };
  },
  created() {
    //constants for the offset factors
    this.offsetFactor = 15;
  },
  methods: {
    dragStart(e, itemIdx) {
      this.dragState.startCategorize(this.recommendations[itemIdx], itemIdx);
    },
    dragEnd() {
      this.dragState.endCategorize();
    },
  },
};
</script>

<template>
  <div class="reco-stack-container">
    <template v-for="(reco, idx) in recommendations" :key="reco">
      <template v-if="idx == 0">
        <div
          class="reco-stack-grid-position"
          :style="{
            paddingLeft:
              offsetFactor * (recommendations.length - idx + 1) + 'px',
            paddingTop: offsetFactor * idx + 'px',
            zIndex: 200 * (recommendations.length - idx + 1),
          }"
        >
          <SchoolCard
            :schoolData="reco"
            draggable="true"
            @dragstart="(e) => dragStart(e, idx)"
            @dragend="(e) => dragEnd()"
          />
        </div>
      </template>
      <template v-else>
        <div
          class="reco-stack-grid-position"
          :style="{
            paddingLeft:
              offsetFactor * (recommendations.length - idx + 1) + 'px',
            paddingTop: offsetFactor * idx + 'px',
            zIndex: 200 * (recommendations.length - idx + 1),
          }"
        >
          <SchoolCard :schoolData="reco" />
        </div>
      </template>
    </template>
  </div>
</template>

<style scoped>
.reco-stack-container {
  display: grid;
}
.reco-stack-grid-position {
  grid-area: 1 / 1 / 1 / 1;
}
</style>
