<script>
import SimpleView from "../components/layout/SimpleView.vue";

export default {
    name: "StageView",
    components: { SimpleView }
}
</script>

<template>
    <div class="container">
      <SimpleView></SimpleView>
    </div>
</template>

<style scoped>
.container {
  width: 550px;
  height: 100%;
  display: flex;
  margin-left:auto;
  margin-right:auto;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color:green;
}
</style>