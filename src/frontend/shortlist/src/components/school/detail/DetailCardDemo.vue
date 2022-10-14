<script>
import DetailCard from "./DetailCard.vue"

export default {
  name: "DetailCardDemo",
  components: { DetailCard },

}
</script>

<template>
  <div class="detail-outer">
    <div class="detail-container">
      <div class="topbox">
        <SimCard :schoolData="schoolData"/>
      </div>
      <div class="secondbox">
        <SimCard :schoolData="schoolData"/> 
      </div>
      <div class="thirdbox">
        <SimCard :schoolData="schoolData"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
.detail-outer {
  width: 100%; 
  height: 100%; 
  display: flex; 
  justify-content: space-around; 
  align-items: center;
}

.detail-container {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
}

.topbox {
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  z-index: 400;
  margin-left: 30px;
  margin-top: 0px;
}

.secondbox {
  grid-area: 1 / 1 / 1 / 1;
  z-index: 300;
  margin-left: 15px;
  margin-top: 15px;
}

.thirdbox {
  grid-area: 1 / 1 / 1 / 1;
  z-index: 200;
  margin-left: 0px;
  margin-top: 30px;
}
</style>