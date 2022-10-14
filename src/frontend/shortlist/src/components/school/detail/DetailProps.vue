<script>
import DetailProp from "../detail/DetailProp.vue"

export default {
  name: "DetailProps",
  components: {DetailProp},
  setup() {
    const props = [
      {text: "School Name: Stevaughsan High School", href2: "https://stuy.enschool.org/"},
      {text: "School ID:", },
      {text: "Students Enrolled:", },
      {text: "Borough name:", },
      {text: "Phone #:", },
      {text: "Address:", }, 
      {text: "Address:", }, 
      {text: "Address:", }, 
      {text: "Address:", }, 
      {text: "Address:", }, 
      {text: "Address:", }, 
      {text: "Address:", }, 
      {text: "Address:", }, 
      {text: "Address:", }, 
      {text: "Address:", }, 
      {text: "Address:", }, 
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