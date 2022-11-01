import { defineStore } from "pinia";

export const userLoginStore = defineStore("loginState", {
  state: () => {
    return {
      loggedIn: false,
      userFirstName: null,
      userEmail: null,
      userPassword: null,
    };
  },
});
