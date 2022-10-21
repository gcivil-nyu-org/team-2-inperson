<script>
import ListBar from "../components/layout/sidebar/ListBar.vue";

import { assignSchoolToList } from "../api/assignSchoolToList.js";

export default {
  components: { ListBar },
  methods: {
    addSchool() {
      assignSchoolToList(20, 20, 30);
      let schoolData = {
        id: 99,
        name: "LSKDJGF",
      };
      let listId = Math.floor(Math.random() * 3);
      this.schoolLists[listId].schools.push(schoolData);
    },
    logEmit(e) {
      console.log(e);
    },
  },
  data() {
    const schoolLists = [
      {
        id: 234,
        name: "list 1",
        schools: [
          {
            id: 0,
            name: "school1",
          },
          {
            id: 1,
            name: "school2",
          },
        ],
      },
      {
        id: 56658,
        name: "list 2",
        schools: [
          {
            id: 2,
            name: "school3",
          },
          {
            id: 3,
            name: "school4",
          },
        ],
      },
      {
        id: 4357568,
        name: "list 3",
        schools: [
          {
            id: 4,
            name: "school4",
          },
        ],
      },
    ];
    return {
      schoolLists,
    };
  },
};
</script>

<template>
  <div style="width: 100%; display: flex; justify-content: space-around">
    <button @click="addSchool">Add</button>
    <button>Remove</button>
  </div>
  <div class="stage-container">
    <div style="width: 500px; height: 900px">
      <ListBar
        :studentLists="schoolLists"
        @listItemDetailClick="(e) => logEmit(e)"
      ></ListBar>
    </div>
  </div>
</template>

<style scoped>
.stage-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>