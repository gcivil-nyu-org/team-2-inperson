<script>
import SimDimension from "../simple/SimDimension.vue"

export default {
  name: "SimDimensions",
  components: {SimDimension},
  setup() {
    const dimensions = [
      {text: "Dimension1:", href2: "http://www.google.com", color: "#FF00FF"},
      {text: "Dimension2:", href2: "http://www.google.com"},
    ];
    return {dimensions};
  }
}
</script>

<template>
  <div class="sim-dimensions-container">
    <template v-for="dimension in dimensions" :key="dimension">
      <SimDimension :text="dimension.text" :href2="dimension.href2" :color="dimension.color"/>
    </template>
  </div>
</template>

<style scoped>
.sim-dimensions-container {
  font-size: 20px;
  width: 380px;
  height: auto;
  margin-left:auto;
  margin-right:auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}
</style>