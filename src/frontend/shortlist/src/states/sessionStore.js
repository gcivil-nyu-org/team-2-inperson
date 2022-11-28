import { defineStore } from "pinia";

export const sessionStore = defineStore("sessionStore", {
  state: () => {
    return {
      loginState: false,
      registeredState: false,
      prefCompletionState: false,
      loginAttempts: {
        count: 0,
        message: null,
      },
      accountMetadata: {
        accountId: null,
        userEmail: "sample@shortlist.nyc",
        accountType: null,
        preferences: {
          userFirstName: null,
          userLastName: "unset",
          recommendationPreferences: {
            q1: {
              Question:
                "How much do you value instructions from your teachers?",
              Response: "",
            },
            q2: {
              Question:
                "How much do you value the importance of a supportive environment?",
              Response: "",
            },
            q3: {
              Question: "Is there a spicific borough you are looking for?",
              Response: "",
            },
            q4: {
              Question: "How would you rank your academic performance so far?",
              Response: "",
            },
          },
          associates: [],
        },
      },
    };
  },
});
