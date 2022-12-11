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
        user_id: null,
        email: "sample@shortlist.nyc",
        username: null,
        tokens: [],
        preferences: {
          userFirstName: "",
          userLastName: "",
          recommendationPreferences: {
            q1: {
              Question:
                "How important is an engaging curriculum & emphasis on critical thinking skills?",
              Response: "",
            },
            q2: {
              Question:
                "How important is a school culture where students feel safe and supported to meet high expectations?",
              Response: "",
            },
            q3: {
              Question: "Is there a specific borough you are looking for?",
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
