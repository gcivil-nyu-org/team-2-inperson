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
    <nav class="navbar navbar-expand-lg static-top" style="background-color:white;">
      
    <router-link to="/" class="reset-style"><img src="/short-list-logo-light-navbar.png" style="width: 170px;
    left: 15px;" alt="shortlist" /></router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#shortlistmenu" aria-controls="shortlistmenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="shortlistmenu">
        <ul class="navbar-nav ms-auto">
            <router-link  class="nav-item" style="display:inline;text-decoration:none;" v-for="routes in links" 
            v-bind:key="routes.id"
            :to="`${routes.page}`"><li class="nav-link active" aria-current="page">{{routes.text}}</li></router-link>
        </ul>
      </div>
    </nav>
</template>


<style>
.spacing {
  margin-right: 10px;
}

.navbar{
  font-family: "Cabin Sketch", cursive;
  font-weight: bold;
}
.router-link-active {
    border-radius: 70px;
    border: 1px solid #067418;
    align-items: center;
    font-weight: 500;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    color: white;
    cursor: pointer;
    display: inline-block;
    padding: 1px 10px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .reset-style, .reset-style * {
        all: revert;
    }
</style>