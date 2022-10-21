
<script>
import List from "./ListRow.vue";

export default {
  name: "ListBar",
  props: ["studentLists"],
  components: { List },
  emits: ["listItemDetailClick"],
  /*
  setup() {
    const onDrop = (evt, list) => {
    //const itemID = evt.dataTransfer.getData('itemID')
    //const item = this.items.find((item) => item.id == itemID)
    //item.list = list
    alert("Added to " + list)
    }

    return {
      onDrop,
    }
  }
  */
  
}
</script>

<template>
  <div class="layout-list-section">
    <template v-for="(list, listNum) in studentLists" :key="listNum">
      <List
        :listName="list.name"
        :listSchools="list.schools"
        @listItemDetailClick="
          (e) => $emit('listItemDetailClick', { schoolId: e, listId: list.id })
        "
      />
    </template>
  </div>


<!--
<List
class="list"
style="margin: 40px"
v-for="list in lists"
:key="list.id"
:listName="list.name"
:listItems="list.items"
@drop="onDrop($event, list.name)"
@dragenter.prevent
@dragover.prevent
>
</List>
--></template>

<style scoped>
.layout-list-section {
  border: 1px solid black;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
