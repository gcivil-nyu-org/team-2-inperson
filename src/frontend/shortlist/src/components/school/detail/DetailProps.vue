<script>
import DetailProp from "../detail/DetailProp.vue"

export default {
  name: "DetailProps",
  components: {DetailProp},
  setup() {
    const props = [
      {text: "Dimension1:", href2: "http://www.google.com"},
      {text: "Dimension2:", href2: "http://www.google.com"},
      {text: "Dimension3:", href2: "http://www.google.com"},
      {text: "Dimension4:", href2: "http://www.google.com"},
      {text: "Dimension5:", href2: "http://www.google.com"},
      {text: "Dimension6:", href2: "http://www.google.com"}
    ];
    return {props};
  }
}
</script>

<template>
  <div class="detail-props-container">
    <template v-for="prop in props" :key="prop">
      <DetailProp :text="prop.text" :href2="prop.href2" :color="prop.color"/>
    </template>
  </div>
</template>

<style scoped>
.detail-props-container {
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