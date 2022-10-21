<script>
import SchoolSimple from "../components/school/simple/SchoolSimple.vue";

export default {
  components: { SchoolSimple },
  setup() {
    const schoolList = [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg/2560px-Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg",
        id: 0,
        name: "Cabbage High School",
        borough: "Manhattan",
        dimensions: [
          {
            name: "Rigorous Instruction",
            value: 0.96,
          },
          {
            name: "Collaborative Teachers",
            value: 0.85,
          },
          {
            name: "Supportive Environment",
            value: 0.39,
          },
        ],
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logan_High_School_%2848496033862%29.jpg/440px-Logan_High_School_%2848496033862%29.jpg",
        id: 1,
        name: "Kale High School",
        borough: "Queens",
        dimensions: [
          {
            name: "Rigorous Instruction",
            value: 0.12,
          },
          {
            name: "Collaborative Teachers",
            value: 0.35,
          },
          {
            name: "Supportive Environment",
            value: 0.3,
          },
        ],
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/City-As-School_High_School_entrance.jpg/534px-City-As-School_High_School_entrance.jpg",
        id: 2,
        name: "Spinach High School",
        borough: "Brooklyn",
        dimensions: [
          {
            name: "Rigorous Instruction",
            value: 0.34,
          },
          {
            name: "Collaborative Teachers",
            value: 0.65,
          },
          {
            name: "Supportive Environment",
            value: 0.97,
          },
        ],
      },
    ];
    return {
      schoolList,
    };
  },
};
</script>
<template>
  <div :class="[$style['stage-container']]">
    <SchoolSimple :schoolData="schoolList[0]"></SchoolSimple>
  </div>
</template>
<style module>
.stage-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
