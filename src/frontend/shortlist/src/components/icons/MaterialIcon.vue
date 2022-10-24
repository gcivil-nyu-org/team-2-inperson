<script>
export default {
  name: "MaterialIcon",
  props: ["src", "color", "size"],
  computed: {
    style() {
      return (
        "font-size: " +
        this.size +
        "px; " +
        "color: " +
        this.color +
        ";" +
        "user-select: none;"
      );
    },
  },
};
</script>

<template>
  <span class="material-symbols-outlined" :style="style">
    {{ src }}
  </span>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 0, "opsz" 48;
}
</style>
