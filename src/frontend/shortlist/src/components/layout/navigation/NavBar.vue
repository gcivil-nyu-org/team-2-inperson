<script>
import { userLoginStore } from "../../../states/userLogin";

export default {
  name: "NavBar",
  setup() {
    const loginState = userLoginStore();
    return { loginState };
  },
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home",
          page: "/",
          always: true,
          requireLogIn: true,
        },
        {
          id: 1,
          text: "Set Preferences",
          page: "/preferences",
          always: false,
          requireLogIn: true,
        },
        {
          id: 2,
          text: "Schools",
          page: "/categorize",
          always: false,
          requireLogIn: true,
        },
        {
          id: 3,
          text: "Profile",
          page: "/profile",
          always: false,
          requireLogIn: true,
        },
        {
          id: 4,
          text: "About",
          page: "/about",
          always: true,
          requireLogIn: true,
        },
        {
          id: 5,
          text: "LogIn",
          page: "/login",
          always: false,
          requireLogIn: false,
        },
        {
          id: 6,
          text: "Log Out",
          page: "/logout",
          always: false,
          requireLogIn: true,
        },
      ],
    };
  },
};
</script>

<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg static-top">
      <router-link to="/" class="reset-style">
        <img
          src="/shortlistname.png"
          style="width: 170px; left: 15px"
          alt="shortlist"
        />
        <span
          v-if="loginState.loggedIn"
          style="color: #ffffff; background-color: black"
        >
          Welcome {{ loginState.userFirstName }} !&nbsp;
        </span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#shortlistmenu"
        aria-controls="shortlistmenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="shortlistmenu">
        <ul class="navbar-nav ms-auto nav">
          <template v-for="link in links">
            <router-link
              class="nav-item"
              style="display: inline; text-decoration: none"
              v-if="
                link.always || link.requireLogIn == this.loginState.loggedIn
              "
              v-bind:key="link.id"
              :to="`${link.page}`"
            >
              <li class="nav-link active" aria-current="page">
                {{ link.text }}
              </li>
            </router-link>
          </template>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
.spacing {
  margin-right: 10px;
}

.navbar {
  font-family: "Cabin Sketch", cursive;
  font-weight: bold;
}
.router-link-active {
  border-radius: 70px;
  border: 1px solid #067418;
  align-items: center;
  font-weight: 500;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
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

.reset-style,
.reset-style * {
  all: revert;
}

ul {
  position: absolute;
  right: 70px;
  top: 14px;
  z-index: 1;
}
</style>
