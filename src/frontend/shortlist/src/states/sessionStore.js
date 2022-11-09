import { defineStore } from "pinia";

export const sessionStore = defineStore("sessionStore", {
  state: () => {
    return {
      loginState: false,
      loginAttempts: {
        count: 0,
        message: null,
      },
      registeredState: false,
      accountMetadata: {
        userFirstName: "Test First Name",
        userLastName: null,
        userEmail: null,
        accountType: null,
      },
    };
  },
});
