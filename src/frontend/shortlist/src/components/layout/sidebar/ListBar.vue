<script>
import List from "./List.vue"

export default {
  name: "ListBar",
  components: { List },
  data() {
    return {
      lists: [
        { id: 0, 
          name: 'List One',
          items: [ { id:0, schName: "School 1" }, ]
        },
        { id: 1, 
          name: 'List Two',
          items: [ { id:0, schName: "School 1" },
                  { id:1, schName: "School 2" },
                  ]
        },
        { id: 2, 
          name: 'List Three',
          items: [ { id:0, schName: "School 1" },
                  { id:1, schName: "School 2" },
                  { id:2, schName: "School 3" },
                  ]
        },
      ]
    }
  },
  setup() {
    const onDrop = (evt, list) => {
    //const itemID = evt.dataTransfer.getData('itemID')
    //const item = this.items.find((item) => item.id == itemID)
    //item.list = list
    console.log("drop-listbar", " ", list)
    }

    return {
      onDrop,
    }
  }
  
}
</script>

<template>
  <div class="list" >
    <List v-for="list in lists"
          :key="list.id"
          :listName="list.name"
          :listItems="list.items" 
          @drop="onDrop($event, list.id)" @dragenter.prevent @dragover.prevent
          >
    </List>
  </div>

</template>

<style scoped>
.list {
  margin-left: 5%;
  margin-top: 10%;
  margin-bottom: 20px;

  /* background: #1f6b40; */
}
</style>