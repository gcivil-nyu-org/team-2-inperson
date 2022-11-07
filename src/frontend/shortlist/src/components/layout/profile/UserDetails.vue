<script>
export default {
  methods: {
    loadFile: function (event) {
      var image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
      console.log(image.src);
    },
  },
};
</script>
<template>
  <main>
    <h1>User Details</h1>

    <div class="profile-pic">
      <label class="-label" for="file">
        <span class="glyphicon glyphicon-camera"></span>
        <span>Change Image</span>
      </label>
      <input id="file" type="file" accept="image/png, image/jpeg" onchange="loadFile" />
      <img id="output" width="200" />
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: pink;
}
</style> -->
