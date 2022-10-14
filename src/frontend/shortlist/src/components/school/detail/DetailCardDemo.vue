<script>
import SimCard from "./DetailCard.vue"

export default {
  name: "DetailCardDemo",
  components: { DetailCard },
  setup() {
    const schoolData = {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg/2560px-Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg",
        },
    },
    return {
      schoolData
  },
  apiExample(schoolId) {
    // return call_api(schoolId); 
  }
}
</script>

<template>
  <div class="sim-outer">
    <div class="sim-container">
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
.sim-outer {
  width: 100%; 
  height: 100%; 
  display: flex; 
  justify-content: space-around; 
  align-items: center;
}
.sim-container {
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