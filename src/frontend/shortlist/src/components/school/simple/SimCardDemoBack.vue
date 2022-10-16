<script>
import SimCard from "../simple/SimCard.vue";
import axios from "axios";

export default {
  name: "SimCardDemo",
  components: { SimCard },
  
  data() {
    return {
    items: [],
    itemName: "",
    };
  },
  
  async created() {
    try {
    const res = await axios.get(`http://localhost:3000/`);
    this.items = res.data;
    } catch (error) {
    console.log(error);
    }
  },
  
  methods: {
    
    async boughtItem(id) {
        await axios.patch(`http://localhost:3000/items/${id}`, {
            bought: true,
        });
        this.items = this.items.map((item) => {
            if (item.id === id) {
            item.bought = true;
            }
            return item;
        });
    },
    //on double clicking the item, it will call removeItem(id) method
    removeItem(id) {
    axios.delete(`http://localhost:3000/items/${id}`);
        this.items = this.items.filter((item) => item.id !== id);
    },
    
    //method for adding items in the list
    async addItem() {
        const res = await axios.post(`http://localhost:3000/items`, {
            name: this.itemName,
        });
        this.items = [...this.items, res.data];
        this.itemName = "";
    },
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
    return {
      schoolData
    }
  },
}
</script>

<template>
  <div class="sim-outer">
    <div class="add-list">
        <input v-model="itemName" @keyup.enter="addItem" type="text" /><br />
        <button @click="addItem()">Add Item</button>
        
    </div>
    <ul>
        <li
            v-for="item of items"
            :class="{ bought: item.bought }"
            :key="item.id"
            @click="boughtItem(item.id)"
            @dblclick="removeItem(item.id)"
        >
            {{ item.name }}
        </li>
    </ul>
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
