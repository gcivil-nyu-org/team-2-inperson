<script>
  export default {
      name: "List",
      props: ["listName", "listItems"],
    }
</script>

<template>
  <div class="list-object">
    <h3 class="list-name">{{ listName }}</h3>
    <p v-for="item in listItems">
      {{ listItems.schName }}
    </p>
  </div>

</template>

<style>
.list-object {
  width: 200px;
  height: 100px;
  
  border-radius: 10px;
  padding: 5%;
  background: rgb(214, 255, 214);
  box-shadow: 5px 5px 10px #779886, -5px -5px 10px white;
  font-family: "Aleo";

  margin-bottom: 20px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.list-name{
  margin-top: auto;
  margin-bottom: auto;
}
</style>