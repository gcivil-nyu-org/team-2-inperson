<script>
import SimCard from "../../school/simple/SimCard.vue";
import SimLeftBar from "../sidebar/SimLeftBar.vue";
//import SimRightBar from "../sidebar/SimRightBar.vue";
//import SimList from "../sidebar/SimList.vue";
import Navbar from "../navigation/Navbar.vue"; 
import ListBar from "../sidebar/ListBar.vue";

export default {
  name: "CompositeView",
  components: { SimCard, SimLeftBar, Navbar, ListBar }, // SimRightBar, SimList,
  //Here's the code to set up data import, currently hard coded data below
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

    const startDrag = (event, item) => {
      //event.dataTransfer.dropEffect = 'move'
      //event.dataTransfer.effectAllowed = 'move'
      //event.dataTransfer.setData('itemID', item.id)
      console.log("start drag")
    }

    const onDrop = (evt, list) => {
      //const itemID = evt.dataTransfer.getData('itemID')
      //const item = this.items.find((item) => item.id == itemID)
      //item.list = list
      console.log("drop")
    }

    return {
      schoolData,
      startDrag,
      onDrop,
    }
  },
}
</script>

<template>
  <div class="composite-container">
    <div class="leftbox">
      <SimLeftBar></SimLeftBar>
    </div>
    
    <div class="sim-container" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
      <div class="topbox" draggable="true" @dragstart="startDrag($event, item)">
        <SimCard :schoolData="schoolData"/>
      </div>
      <div class="secondbox">
        <SimCard :schoolData="schoolData"/> 
      </div>
      <div class="thirdbox">
        <SimCard :schoolData="schoolData"/>
      </div>
    </div>

    <div class="rightbox">
      <!-- <SimList></SimList> -->
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
.topbox {

}
.leftbox {

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
.rightbox {
  width: 28%;
  height: 100%;
  float: right;
  justify-content: space-between;
  align-items: right;
  background-color:rgb(10, 10, 10, .2);
}

</style>