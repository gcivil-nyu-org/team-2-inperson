<script>
import List from "./List.vue"
import TrashButton from "./TrashButton.vue"

export default {
  name: "ListBar",
  components: { List, TrashButton },
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
    alert("Added to " + list)
    }

    return {
      onDrop,
    }
  }
  
}
</script>

<template>
  <div class="Listbar">
    <List class="list" style="margin:40px;" v-for="list in lists"
          :key="list.id"
          :listName="list.name"
          :listItems="list.items" 
          @drop="onDrop($event, list.name)" @dragenter.prevent @dragover.prevent
          >
    </List>
  </div>

</template>

<style scoped>
.list {
  /* Ye's
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: auto; */

  position: relative;
  transform: translate(-50%,-50%);
  left:50%;
  bottom:60%;
  background: rgba(25, 138, 61, 0.3);
  border-radius: 20px;
  border-left: 1px solid rgba(255,255,255,0.3);
  border-top: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px 
  rgba(0,0,0,0.2);
  text-align: center;
}

.Listbar{
  margin-top:30%;
  margin-right:10%;
}
</style>