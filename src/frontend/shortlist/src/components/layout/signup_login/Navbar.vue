<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div id="nav">
    <!-- Nav Bar -->
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="/favicon.ico" id="favicon_img"
      /></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/About" class="nav-item nav-link">About</router-link>
          <router-link to="/preferences" class="nav-link"
            >My Preferences</router-link
          >
          <router-link to="/categorize" class="nav-link"
            >School Profiles</router-link
          >
          <router-link to="/Contact" class="nav-link">Contact</router-link>
        </div>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#favicon_img {
  width: 30px;
}
#nav {
  background: whitesmoke;
  margin: auto;
}
#nav {
  padding: 8px;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  font-size: 24px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: 0.5rem;
  padding: 15px;
}
.d-flex {
  margin-left: auto;
}
</style>
