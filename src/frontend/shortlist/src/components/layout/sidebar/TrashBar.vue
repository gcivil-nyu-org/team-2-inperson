<script>
import TrashButton from './TrashButton.vue'
export default {
  name: "TrashBar",
  components: {TrashButton},
}
</script>

<template>
  <div class="trash-container" >
      <TrashButton></TrashButton>
  </div>
</template>

<style scoped>
.trash-container {
  width: 28%;
  height: 100%;
  float:left;
  /* display: left; */
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: left;
  background-color:white;
}
</style>