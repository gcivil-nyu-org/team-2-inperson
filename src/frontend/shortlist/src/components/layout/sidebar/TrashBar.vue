<script>
import TrashButton from './TrashButton.vue'
export default {
  name: "TrashBar",
  components: {TrashButton},
}
</script>

<template>
<div class="TrashBar">
    <img src="/bin.png" style="width: 100px;
    left: 15px;" alt="shortlist" /> 
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