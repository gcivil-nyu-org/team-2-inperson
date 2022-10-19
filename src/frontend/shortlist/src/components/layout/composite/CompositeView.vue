<script>
import SimCard from "../../school/simple/SimCard.vue";
// import SimCardDemo from "../../school/simple/SimCardDemo.vue";
import DetailCard from "../../school/detail/DetailCard.vue";
// import DetailCardDemo from "../../school/detail/DetailCardDemo.vue";
import TrashBar from "../sidebar/TrashBar.vue";
import ListBar from "../sidebar/ListBar.vue";

import axios from "axios";

export default {
  name: "CompositeView",
  components: { SimCard, DetailCard, TrashBar, ListBar }, //SimCardDemo, DetailCardDemo,
  //Here's the code to set up data import, currently hard coded data below
  data() {
    return {
      items: [],
      showSimple: true,
      selectedSchool: {},
      // showAlert: false,
    };
  },
  
  async created() {
    try {
      // for local json-server
      // const jsonFile = await axios.get(`http://localhost:3000/schools`);
      // this.items = jsonFile.data;
      
      // for direct json
      const jsonFile = await axios.get(`http://localhost:3000/data.json`);
      this.items = jsonFile.data.schools;

      let picked = Math.floor(Math.random() * 3);
      this.selectedSchool = this.items[picked];
    } catch (error) {
      console.log(error);
    }
  },

  setup() {
    const schoolData = {
      img: 
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg/2560px-Stuyvesant_HS_main_entrance_on_Chambers_Street.jpg",
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

    const detailData = {
      name: "Stuyvesant High School",
      borough: "West Village, Manhattan",
      dimensions: {
        phone: {
          name: "Phone Number",
          value: "(212)-312-4800"
        },
        address: {
          name: "Address",
          value: "345 Chambers St, New York, NY 10282"
        },
        description: {
          name: "School Description",
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        rigorous_instruction: {
          name: "Rigorous Instruction Rating",
          value: "89%"
        },
        collaborative_teachers:{
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
      }
    }
    const startDrag = (event, item) => {
      //event.dataTransfer.dropEffect = 'move'
      //event.dataTransfer.effectAllowed = 'move'
      //event.dataTransfer.setData('itemID', item.id)
      // console.log("start drag")
    }

    const onDrop = (evt, zone) => {
      //const itemID = evt.dataTransfer.getData('itemID')
      //const item = this.items.find((item) => item.id == itemID)
      //item.list = list
      alert("Dropped in " + zone)
    }

    return {
      schoolData,
      detailData,
      startDrag,
      onDrop,
    }
  },
}
</script>

<template>
  <div class="composite-container">
    <div class="leftbox" @drop="onDrop($event, 'trash')" 
                @dragenter.prevent @dragover.prevent >
      <TrashBar/>
    </div>
    
    <div class="sim-container" @drop="onDrop($event, 1)" 
                @dragenter.prevent @dragover.prevent
                @click="showSimple=!showSimple">
      <!-- {{picked}} -->
      
      <div class="topbox" draggable="true" @dragstart="startDrag($event, item)">
        <template v-if="showSimple">
          <SimCard :schoolData="selectedSchool"/>
        </template>
        <template v-else>
          <DetailCard :schoolDetailData="detailData"/>
        </template>
      </div>
    
      <div class="secondbox">
        <SimCard :schoolData="selectedSchool"/>  
      </div>
      <div class="thirdbox">
        <SimCard :schoolData="selectedSchool"/> 
      </div>
    </div>

    <div class="rightbox">
      <ListBar/>
    </div>
  </div>
</template>

<style scoped>
.composite-container {
  width: 100%; 
  height: 100%; 
  display: flex; 
  justify-content: space-around; 
  align-items: center;
}

.leftbox {
  padding-left: 100px;
}

.sim-container {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  padding-left: 70px;
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
.rightbox {
  width: 28%;
  height: auto;
  /* float: center; */
  justify-content: space-between;
  align-items: right;
  background-color:white;
}
</style>