<script>
import SimCard from "./SimCard.vue"

export default {
  name: "SimCardDemo",
  components: { SimCard },
  setup() {
    const schoolData = {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg/2560px-Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg",
      name: "Stuyvesant High School",
      borough: "West Village, Manhattan",
      dimensions: {
        enrollment: {
          name: "Enrollment",
          value: "3,344"
        },
        faculty: {
          name: "Faculty Count",
          value: "155"
        },
        athletics: {
          name: "Athletic Conference",
          value: "PSAL"
        },
        studentRatio: {
          name: "Student-to-Teacher Ratio",
          value: "21.6:1",
        },
        colors: {
          name: "School Colors",
          value: "Red, Blue, White",
        },
      }
    }
    return {
      schoolData
    }
  },
  apiExample(schoolId) {
    // return call_api(schoolId); 
  }
}
</script>

<template>
    <div class="sim-container">
      <div style="background: yellow; width: 500px; height: 700px;">
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
.sim-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.topbox {
  position: absolute;
  z-index: 400;
  left: 30px;
  top: 0px;
  right: 20px;
}

.secondbox {
  z-index: 300;
  position: absolute;
  left: 15px;
  top: 15px;
}

.thirdbox {
  z-index: 200;
  position: absolute;
  left: 0px;
  top: 30px;

}
</style>