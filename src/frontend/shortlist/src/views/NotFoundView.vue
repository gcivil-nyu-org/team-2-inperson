<script>
  export default {
    name: "NotFound",
  }
</script>

<template>
  <h2>
    <p class = "instructions" id = "bigTitle"> Sorry, that page does not exist. </p>
    </h2>
    <h3>
      <p class = "instructions" id = "smallTitle"> 
        Here are some better options: 
        </p>
    </h3>
  <table class = "table">
  <tr>
    <td>
      <router-link to="/" >
          <p class="nav-item" id="small">Take me home</p>
        </router-link>
      </td>
  </tr>
  <tr>
    <td><router-link to="/Signup">
          <p class="nav-item nav-link" id="small">Sign me up</p>
        </router-link>
      </td>
  </tr>
  <tr>
    <td><router-link to="/Login">
          <p class="nav-item nav-link" id="small">Log me in</p>
        </router-link></td>
  </tr>
    <tr>
    <td><router-link to="/about">
          <p class="nav-item nav-link" id="small">What is Shortlist again?</p>
        </router-link></td>
  </tr>
</table>
</template>

<style>
h4 {
  padding-top: 10%;
  text-align: center;
}
#bigTitle {
  margin-top: 5%;
  margin-left: 25%; 
  font-size: 50px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  color: #008037;
}
#smallTitle {
  margin-left: 25%; 
  font-size: 35px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  color: #008037;
}
td {
  /* margin-top: 5%; */
  margin-left: 25%; 
  font-size: 25px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
.table {
  /* position: relative;  */
  margin-left: 25%; 
}
#small {
  color: #008037;
}
</style>
