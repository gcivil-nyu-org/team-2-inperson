import { defineStore } from "pinia";

export const userLoginStore = defineStore("loginState", {
  state: () => {
    return {
      loggedIn: false,
      userID: "Test User",
      userEmail: null,
      userPassword: null,
    };
  },
});
