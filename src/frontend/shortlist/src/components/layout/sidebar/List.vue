<script>
  export default {
      name: "List",
      props: ["listName", "listItems"],
    }
</script>

<template>
  <div class="list-object">
    <h3>{{ listName }}</h3>
    <p v-for="item in listItems">
      {{ listItems.schName }}
    </p>
  </div>

</template>

<style>
.list-object {
  width: 90%;
  height: 100px;
  
  border-radius: 10px;
  padding: 5%;
  background: #a26ba0;
  box-shadow: 5px 5px 10px #779886, -5px -5px 10px white;
  font-family: "Aleo";
}
</style>