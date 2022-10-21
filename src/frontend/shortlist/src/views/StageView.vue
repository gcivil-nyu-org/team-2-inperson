<script>
import SchoolCard from "../components/school/SchoolCard.vue";

export default {
  components: { SchoolCard },
  setup() {
    const schoolList = [
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg/2560px-Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg",
        id: 0,
        name: "Cabbage High School",
        borough: "Manhattan",
        link: "https://stuy.enschool.org/",
        dimensions: [
          {
            name: "Rigorous Instruction",
            value: 0.96,
            simple: true,
          },
          {
            name: "Collaborative Teachers",
            value: 0.85,
            simple: true,
          },
          {
            name: "Supportive Environment",
            value: 0.39,
            simple: true,
          },
          {
            name: "Phone Number",
            value: "212-312-4800",
            simple: false,
          },
          {
            name: "Address",
            value: "345 Chambers St, New York, NY 10282",
            simple: false,
          },
          {
            name: "School Description",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at magna ut magna condimentum facilisis. Nunc sodales ullamcorper tortor eu pharetra. Fusce efficitur iaculis lorem in pharetra. Maecenas eros orci, ultrices in porttitor vel, pharetra quis dolor. Sed sagittis sagittis orci at dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vitae velit eros. Phasellus laoreet quam diam, vel rutrum diam venenatis quis.",
            simple: false,
          },
          {
            name: "Curriculum Quality",
            value: "Well Developed",
            simple: false,
          },
        ],
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logan_High_School_%2848496033862%29.jpg/440px-Logan_High_School_%2848496033862%29.jpg",
        id: 1,
        name: "Kale High School",
        borough: "Queens",
        link: "https://stuy.enschool.org/",
        dimensions: [
          {
            name: "Rigorous Instruction",
            value: 0.96,
            simple: true,
          },
          {
            name: "Collaborative Teachers",
            value: 0.85,
            simple: true,
          },
          {
            name: "Supportive Environment",
            value: 0.39,
            simple: true,
          },
          {
            name: "Phone Number",
            value: "212-312-4800",
            simple: false,
          },
          {
            name: "Address",
            value: "345 Chambers St, New York, NY 10282",
            simple: false,
          },
          {
            name: "School Description",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at magna ut magna condimentum facilisis. Nunc sodales ullamcorper tortor eu pharetra. Fusce efficitur iaculis lorem in pharetra. Maecenas eros orci, ultrices in porttitor vel, pharetra quis dolor. Sed sagittis sagittis orci at dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vitae velit eros. Phasellus laoreet quam diam, vel rutrum diam venenatis quis.",
            simple: false,
          },
          {
            name: "Curriculum Quality",
            value: "Well Developed",
            simple: false,
          },
        ],
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/City-As-School_High_School_entrance.jpg/534px-City-As-School_High_School_entrance.jpg",
        id: 2,
        name: "Spinach High School",
        borough: "Brooklyn",
        link: "https://stuy.enschool.org/",
        dimensions: [
          {
            name: "Rigorous Instruction",
            value: 0.96,
            simple: true,
          },
          {
            name: "Collaborative Teachers",
            value: 0.85,
            simple: true,
          },
          {
            name: "Supportive Environment",
            value: 0.39,
            simple: true,
          },
          {
            name: "Phone Number",
            value: "212-312-4800",
            simple: false,
          },
          {
            name: "Address",
            value: "345 Chambers St, New York, NY 10282",
            simple: false,
          },
          {
            name: "School Description",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at magna ut magna condimentum facilisis. Nunc sodales ullamcorper tortor eu pharetra. Fusce efficitur iaculis lorem in pharetra. Maecenas eros orci, ultrices in porttitor vel, pharetra quis dolor. Sed sagittis sagittis orci at dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vitae velit eros. Phasellus laoreet quam diam, vel rutrum diam venenatis quis.",
            simple: false,
          },
          {
            name: "Curriculum Quality",
            value: "Well Developed",
            simple: false,
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
    <SchoolCard :schoolData="schoolList[0]"></SchoolCard>
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
