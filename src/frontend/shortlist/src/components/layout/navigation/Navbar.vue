<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        /*{
          id: 0,
          text: 'Demo',
          page:'/demo'
        },*/
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Simple View',
          page:'/demo'
        },
        {
          id: 2,
          text: 'Set Preferences',
          page:'/setprefs'
        }
      ],
      //logo: require("../../image/shortlist.sm")
    }
  }
}
</script>

<template>
<div>
    <nav>
      <!--<router-link to="/home">Home</router-link>
      <img class="nav-img" height = 20, width=10  src="../../image/shortlist.sm" alt="shortlist" />-->
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>


<style>
.spacing {
  margin-right: 10px;
}
.nav {
    align: right;
    display:flex;
}
.nav-img {

}
</style>