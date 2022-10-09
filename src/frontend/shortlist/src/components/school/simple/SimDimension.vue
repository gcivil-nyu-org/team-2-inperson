<script>
  export default {
    name: "SimDimension",
    props: ["text", "href2", "color"],
    computed: {
      computedStyle() {
        if (this.color !== "") {
          console.log(this.color);
          return "color: " + this.color + ";";
        } else {
          console.log(this.color);
          return "color: #000000;";
        }
      }
    }
  }
</script>

<template>
  <a :href="href2">
    <div :style="computedStyle">
      {{text}}
    </div>
  </a>
</template>

<style scope>
a {
  text-decoration: none;
  font-weight: 600;
  
}
</style>