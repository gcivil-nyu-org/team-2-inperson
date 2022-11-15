import { defineStore } from "pinia";

export const sessionStore = defineStore("sessionStore", {
  state: () => {
    return {
      loginState: false,
      registeredState: false,
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
              Question: "Which instruction mode do you prefer?",
              Response: "",
            },
            q2: {
              Question: "Do you have any Extra-curricular interests?",
              Response: [],
            },
            q3: {
              Question: "Do you already have a school in mind?",
              Response: "",
            },
            q4: {
              Question:
                "Is there a transit bus/train line you're interested in?",
              Response: "",
            },
            q5: {
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
