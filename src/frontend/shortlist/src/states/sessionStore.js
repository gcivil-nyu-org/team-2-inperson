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
        userFirstName: "Shortlist User",
        userLastName: "not set",
        userEmail: "sample@shortlist.nyc",
        accountType: null,
        preferences: {
          q1: {
            Question: "Which instruction mode do you prefer?",
            Response: "In-Person",
          },
          q2: {
            Question: "Do you have any Extra-curricular interests?",
            Response: ["Performing Arts"],
          },
          q3: {
            Question: "Do you already have a school in mind?",
            Response: "city as school",
          },
          q4: {
            Question: "Is there a transit bus/train line you're interested in?",
            Response: "2",
          },
          q5: {
            Question: "How would you rank your academic performance so far?",
            Response: "6",
          },
        },
        associates: [],
      },
    };
  },
});
