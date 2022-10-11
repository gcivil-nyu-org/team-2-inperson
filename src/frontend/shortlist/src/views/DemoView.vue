<script>
import SimpleBarView from "../components/layout/sidebar/SimpleBarView.vue";
import SimCardDemo from "../components/school/simple/SimCardDemo.vue";

export default {
  components: {
    SimpleBarView,
    SimCardDemo
  },
}
</script>

<template>
  Week of 2022-10-05:<br>
  List of demos<br>
  <SimpleBarView>
    <div class="middle-wrapper">
      <SimCardDemo/>
    </div>
  </SimpleBarView>
</template>

<style scoped>

</style>