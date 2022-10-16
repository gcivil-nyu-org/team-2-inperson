<script>
import {ref} from "vue"
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Item A',
          list: 1,
        },
        {
          id: 1,
          title: 'Item B',
          list: 1,
        },
        {
          id: 2,
          title: 'Item C',
          list: 2,
        },
      ],
    }
  },
  computed: {
        listOne() {
            return this.items.filter((item) => item.list === 1)
        },
        listTwo() {
            return this.items.filter((item) => item.list === 2)
        },
    },
    methods: {
        startDrag(evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
            console.log("start")
        },
        onDrop(evt, list) {
            const itemID = evt.dataTransfer.getData('itemID')
            const item = this.items.find((item) => item.id == itemID)
            item.list = list
        },
    },
}

    // COMPOSITION
    // setup () {
    //     const items = ref([
    //         { id: 0, title: 'Item A', list: 1 },
    //         { id: 1, title: 'Item B', list: 1 },
    //         { id: 2, title: 'Item C', list: 2 },
    //     ])

    //     const getList = (list) => {
    //         return items.value.filter((item) => item.list == list)
    //     }

    //     const startDrag = (event, item) => {
    //         event.dataTransfer.dropEffect = 'move'
    //         event.dataTransfer.effectAllowed = 'move'
    //         event.dataTransfer.setData('itemID', item.id)
    //         console.log("start drag")
    //     }

    //     const onDrop = (evt, list) => {
    //         const itemID = evt.dataTransfer.getData('itemID')
    //         const item = this.items.find((item) => item.id == itemID)
    //         item.list = list
    //         console.log("drop")
    //     }

    //     const debug = (event) => {
    //         console.log(event.target.name)
    //     }

    //     return {
    //         getList,
    //         onDrop,
    //         startDrag,
    //         debug,
    //     }
    // }

  </script>
  
  <template>
    <div>Stage</div>

    <div>
        <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
            <div class="drag-el"
                v-for="item in listOne" 
                :key="item.title" 
                draggable="true"
                @dragstart="startDrag($event, item)"
            >
                {{ item.title }}
            </div>
        </div>
        <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
            <div
                class="drag-el"
                v-for="item in listTwo"
                :key="item.title"
                draggable="true"
                @dragstart="startDrag($event, item)"  >
                    {{ item.title }}
                </div>
        </div>
    </div>

</template>

<style scoped>
.drop-zone {
  width: 80%;
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
