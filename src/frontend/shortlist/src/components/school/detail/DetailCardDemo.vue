<script>
import DetailCard from "./DetailCard.vue";

export default {
  name: "DetailCardDemo",
  components: { DetailCard },
  setup() {
    const schoolDetailData = {
      name: "Stuyvesant High School",
      borough: "West Village, Manhattan",
      dimensions: {
        phone: {
          name: "Phone Number",
          value: "(212)-312-4800",
        },
        address: {
          name: "Address",
          value: "345 Chambers St, New York, NY 10282",
        },
        rigorious_instruction: {
          name: "Rigorous Instruction Rating",
          value: "89%",
        },
        collaborative_teachers: {
          name: "Collaborative Teachers Rating",
          value: "85%",
        },
        supportive_environment: {
          name: "Supportive Environment",
          value: "83%",
        },
        effective_school_leadership: {
          name: "Effective School Leadership",
          value: "93%",
        },
        strong_family_community_ties: {
          name: "Strong Family Community Ties",
          value: "87%",
        },
        trust: {
          name: "Trust",
          value: "92%",
        },
        curriculum_quality: {
          name: "Curriculum Quality",
          value: "Well Developed",
        },
      },
    };
    return {
      schoolDetailData,
    };
  },
  //   apiExample(schoolId) {
  //     // return call_api(schoolId);
  //   }
};
</script>

<template>
  <div class="detail-outer">
    <div class="detail-container">
      <div class="topbox">
        <DetailCard :schoolDetailData="schoolDetailData" />
      </div>
      <!-- <div class="secondbox">
        <DetailCard :schoolDetailData="schoolDetailData"/> 
      </div>
      <div class="thirdbox">
        <DetailCard :schoolDetailData="schoolDetailData"/>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
/* .detail-outer {
  width: 100%; 
  height: 100%; 
  display: flex; 
  justify-content: space-around; 
  align-items: center;
} */

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
  margin-top: 30px;
}

/* .secondbox {
  grid-area: 1 / 1 / 1 / 1;
  z-index: 300;
  margin-left: 15px;
  margin-top: 15px;
} */
/* 
.thirdbox {
  grid-area: 1 / 1 / 1 / 1;
  z-index: 200;
  margin-left: 0px;
  margin-top: 30px;
} */
</style>
