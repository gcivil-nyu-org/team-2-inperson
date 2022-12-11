import { fluentAccountCreate } from "./endpoints/accountCreate";
// import { fluentAccountMetadata } from "./endpoints/accountMetadata";
import { fluentRecommendations } from "./endpoints/recommendations";
import { fluentAccountLogin } from "./endpoints/accountLogin";

export default class ShortlistApi {
  constructor(baseURL) {
    this.baseEndpoint = baseURL;
  }
  createAccount() {
    // not in use
    return new fluentAccountCreate(this.baseEndpoint);
  }
  getAccountMetadata(payload, successCb, failCb) {
    // return new fluentAccountMetadata(this.baseEndpoint);
    return new tempUserMetadata(payload, successCb, failCb);
  }
  getRecommendations() {
    return new fluentRecommendations(this.baseEndpoint);
  }
  loginAccount() {
    // not in use
    return new fluentAccountLogin(this.baseEndpoint);
  }
  signupUser(payload, successCb, failCb) {
    return new temporarySignup(payload, successCb, failCb);
    // return new fluentAccountSignup(this.baseEndpoint);
  }
  acceptInvite(payload, successCb, failCb) {
    return new temporaryAcceptInvite(payload, successCb, failCb);
    // return new fluentAccountSignup(this.baseEndpoint);
  }
  updatePreferences(payload, successCb, failCb) {
    return new temporaryUpdatePreferences(payload, successCb, failCb);
  }
  addStudent(payload, successCb, failCb) {
    return new temporaryAddStudent(payload, successCb, failCb);
  }
  authLogin(payload, successCb, failCb) {
    return new tempAuthLogin(payload, successCb, failCb);
  }
  updateRecommendation(payload, successCb, failCb) {
    return new tempUpdateRecommendation(payload, successCb, failCb);
  }
  getShortlist(payload, successCb, failCb) {
    return new tempGetShortlist(payload, successCb, failCb);
  }
}

import axios from "axios";
import md5 from "md5";

export class tempUpdateRecommendation {
  constructor(payload, successCb, failCb) {
    this.payload = payload;
    this.successCb = successCb;
    this.failCb = failCb;
  }
  execute() {
    axios({
      method: "POST",
      url: "https://api.shortlist.nyc/recommendation/update",
      headers: {},
      data: this.payload,
    })
      .then((result) => this.successCb(result))
      .catch((err) => this.failCb(err));
  }
}

export class temporarySignup {
  constructor(payload, successCb, failCb) {
    this.email = payload.email;
    // this.username = md5(payload.email).substring(0, 10);
    this.username = payload.firstName + payload.lastName;
    this.password = payload.password;
    this.passwordHash = md5(payload.password);
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.accountType = "PARENT";
    this.successCb = successCb;
    this.failCb = failCb;
  }

  execute() {
    axios({
      method: "POST",
      url: "https://api.shortlist.nyc/auth/register",
      headers: {},
      data: {
        email: this.email,
        username: this.username,
        password: this.password,
        userFirstName: this.firstName,
        userLastName: this.lastName,
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
      },
    })
      .then((result) => this.successCb(result))
      .catch((err) => this.failCb(err));
  }
}

export class tempUserMetadata {
  constructor(payload, successCb, failCb) {
    this.user_id = payload.userID;
    this.successCb = successCb;
    this.failCb = failCb;
  }

  execute() {
    axios({
      method: "GET",
      url: "https://api.shortlist.nyc/auth/" + this.user_id + "/details",
      headers: {},
      data: "",
    })
      .then((result) => this.successCb(result))
      .catch((err) => this.failCb(err));
  }
}

export class temporaryAcceptInvite {
  constructor(payload, successCb, failCb) {
    this.email = payload.email;
    // this.username = md5(payload.email).substring(0, 10);
    this.username = payload.firstName + payload.lastName;
    this.password = payload.password;

    this.passwordHash = md5(payload.password);
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.accountType = "PARENT";
    this.successCb = successCb;
    this.failCb = failCb;
  }

  execute() {
    // send the email first
    axios({
      method: "POST",
      //assumed would be url
      url: "https://api.shortlist.nyc/auth/accept-invite",
      headers: {},
      data: {
        email: this.email,
        username: this.username,
        password: this.password,
        isChild: this.isChild,
      },
    })
      // user/email success;
      /*
      .then(() => {
        // register the site account
        axios({
          method: "POST",
          url: "https://api.shortlist.nyc/account/create",
          headers: {},
          data: {
            email: this.email,
            passwordHash: this.passwordHash,
            accountType: this.accountType,
            preferences: {
              userFirstName: this.firstName,
              userLastName: this.lastName,
              recommendationPreferences: {
                
                // 1. Rogorous Instruction
                // 2. Collaborative Teachers Rating
                // 3. Supportive Environment Rating
                // 4. Effective School Leadership Rating
                // 5. Strong Family-Community Ties Rating
                // Use as simple multiplier, add up for rank
                
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
                  Question:
                    "How would you rank your academic performance so far?",
                  Response: "",
                },
              },
            },
          },
        })
          .then((result) => this.successCb(result))
          .catch((fail) => this.failCb(fail));
      })
      */
      .then((result) => this.successCb(result))
      // email fail;
      .catch((err) => this.failCb(err));
  }
}

export class temporaryUpdatePreferences {
  constructor(payload, successCb, failCb) {
    this.user_id = payload.user_id;
    this.preferences = payload.preferences;
    this.email = payload.email;
    this.username = payload.user_name;
    this.successCb = successCb;
    this.failCb = failCb;
  }

  execute() {
    axios({
      method: "PUT",
      url: "https://api.shortlist.nyc/auth/" + this.user_id + "/details",
      headers: {},
      data: {
        preferences: this.preferences,
        username: this.username,
        email: this.email,
      },
    })
      .then((result) => this.successCb(result))
      .catch((err) => this.failCb(err));
  }
}

export class temporaryAddStudent {
  constructor(payload, successCb, failCb) {
    this.accountId = payload.accountId;
    this.addEmail = payload.addEmail;
    this.successCb = successCb;
    this.failCb = failCb;
  }
  execute() {
    axios({
      method: "POST",
      url: "https://api.shortlist.nyc/account/send-invite",
      headers: {},
      data: {
        accountId: this.accountId,
        addEmail: this.email,
      },
    })
      .then((result) => this.successCb(result))
      .catch((err) => this.failCb(err));
  }
}

export class tempAuthLogin {
  constructor(payload, successCb, failCb) {
    this.email = payload.email;
    this.password = payload.password;
    this.successCb = successCb;
    this.failCb = failCb;
  }
  execute() {
    axios({
      method: "POST",
      url: "https://api.shortlist.nyc/auth/login",
      headers: {},
      data: {
        email: this.email,
        password: this.password,
      },
    })
      .then((result) => this.successCb(result))
      .catch((err) => this.failCb(err));
  }
}

export class tempGetShortlist {
  constructor(payload, successCb, failCb) {
    this.shortlistId = payload;
    this.successCb = successCb;
    this.failCb = failCb;
  }
  execute() {
    axios({
      method: "GET",
      url:
        "http://shortlist-api-361033341.us-east-1.elb.amazonaws.com/shortlists/" +
        this.shortlistId,
      headers: {},
      data: "",
    })
      .then((result) => this.successCb(result))
      .catch((err) => this.failCb(err));
  }
}
