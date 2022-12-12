<script>
import { sessionStore } from "../../../states/sessionStore";
import { mapState } from "pinia";

const appLinks = [
  {
    id: 0,
    text: "Home",
    page: "/",
    always: true,
    requireLogIn: true,
  },
  {
    id: 1,
    text: "Schools",
    page: "/categorize",
    always: false,
    requireLogIn: true,
  },
  {
    id: 2,
    text: "Profile",
    page: "/profile",
    always: false,
    requireLogIn: true,
  },
  {
    id: 3,
    text: "About",
    page: "/about",
    always: true,
    requireLogIn: true,
  },
  {
    id: 4,
    text: "Login",
    page: "/login",
    always: false,
    requireLogIn: false,
  },
  {
    id: 5,
    text: "Log Out",
    page: "/logout",
    always: false,
    requireLogIn: true,
  },
];

export default {
  name: "NavBar",
  computed: {
    ...mapState(sessionStore, {
      loginState: "loginState",
      accountMetadata: "accountMetadata",
    }),
  },
  setup() {
    return {
      links: appLinks,
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
        <span v-if="loginState" style="color: #ffffff; background-color: black">
          <span v-if="accountMetadata != null">
            Welcome {{ accountMetadata.preferences.userFirstName }} !&nbsp;
          </span>
          <span v-else> Welcome !&nbsp; </span>
        </span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        src="/default-profile.png"
        data-bs-toggle="collapse"
        data-bs-target="#shortlistmenu"
        aria-controls="shortlistmenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="shortlistmenu">
        <ul class="navbar-nav ms-auto nav" style="padding-bottom: 10px">
          <template v-for="link in links">
            <router-link
              class="nav-item"
              style="display: inline; text-decoration: none"
              v-if="link.always || link.requireLogIn == loginState"
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
  right: 50px;
  top: 14px;
  z-index: 1;
}
</style>
