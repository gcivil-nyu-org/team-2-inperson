<script>
import ShortlistManager from "../components/layout/shortlists/ShortlistManager.vue";

import { shortLists } from "../api/examples/shortlists.js";
import { assignSchoolToList } from "../api/assignSchoolToList.js";

export default {
  components: { ShortlistManager },
  methods: {
    addSchool() {
      assignSchoolToList(20, 20, 30);
      let schoolData = {
        id: 99,
        name: "LSKDJGF",
      };
      let listId = Math.floor(Math.random() * 3);
      this.myShortlists[listId].schools.push(schoolData);
    },
    logEmit(e) {
      console.log(e);
    },
  },
  data() {
    const myShortlists = shortLists;
    return {
      myShortlists,
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
      <ShortlistManager
        :studentShortlists="myShortlists"
        @listItemDetailClick="(e) => logEmit(e)"
      />
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
