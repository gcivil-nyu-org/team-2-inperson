<script>
import SimpleView from "../components/school/simple/SimpleView.vue";
import DetailView from "../components/school/detail/DetailView.vue";

export default {
    name: "StageView",
    components: { SimpleView, DetailView }
}
</script>

<template>
    <div class="container">
      <!--<DetailView></DetailView>-->
      <simple-view></simple-view>

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