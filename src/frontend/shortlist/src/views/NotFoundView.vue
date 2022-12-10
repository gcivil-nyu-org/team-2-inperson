<script>
  export default {
    name: "NotFound",
  }
</script>

<template>
  <h2>
    <p class = "instructions" id = "big"> Sorry, that page does not exist. </p>
    </h2>
    <h3>
      <p class = "instructions" id = "small"> 
        Here are some better options: 
        </p>
    </h3>
  <table class = "table">
  <tr>
    <td>Take me home</td>
  </tr>
  <tr>
    <td>Sign me up</td>
  </tr>
  <tr>
    <td>Log me in</td>
  </tr>
    <tr>
    <td>What is Shortlist again?</td>
  </tr>
</table>
</template>

<style>
h4 {
  padding-top: 10%;
  text-align: center;
}
#big.instructions {
  margin-top: 5%;
  margin-left: 25%; 
  font-size: 50px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
#small.instructions {
  margin-top: 5%;
  margin-left: 25%; 
  font-size: 25px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
.table {
  position: relative; 
  margin-left: 25%; 
}
</style>
