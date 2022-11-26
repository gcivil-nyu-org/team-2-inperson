import { fluentAccountCreate } from "./endpoints/accountCreate";
import { fluentAccountMetadata } from "./endpoints/accountMetadata";
import { fluentRecommendations } from "./endpoints/recommendations";
import { fluentAccountLogin } from "./endpoints/accountLogin";

export default class ShortlistApi {
  constructor(baseURL) {
    this.baseEndpoint = baseURL;
  }
  createAccount() {
    return new fluentAccountCreate(this.baseEndpoint);
  }
  getAccountMetadata() {
    return new fluentAccountMetadata(this.baseEndpoint);
  }
  getRecommendations() {
    return new fluentRecommendations(this.baseEndpoint);
  }
  loginAccount() {
    return new fluentAccountLogin(this.baseEndpoint);
  }
  signupUser(payload, successCb, failCb) {
    return new temporarySignup(payload, successCb, failCb);
    // return new fluentAccountSignup(this.baseEndpoint);
  }
  updatePreferences(payload, successCb, failCb) {
    return new temporaryUpdatePreferences(payload, successCb, failCb);
  }
  addStudent(payload, successCb, failCb) {
    return new temporaryAddStudent(payload, successCb, failCb);
  }
}

import axios from "axios";
import md5 from "md5";
export class temporarySignup {
  constructor(payload, successCb, failCb) {
    this.email = payload.email;
    this.username = md5(payload.email).substring(0, 10);
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
      url: "https://api.shortlist.nyc/auth/register",
      headers: {},
      data: {
        email: this.email,
        username: this.username,
        password: this.password,
      },
    })
      // user/email success;
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
      // email fail;
      .catch((err) => this.failCb(err));
  }
}

export class temporaryUpdatePreferences {
  constructor(payload, successCb, failCb) {
    this.accountId = payload.accountId;
    this.preferences = payload.preferences;
    this.successCb = successCb;
    this.failCb = failCb;
  }
  execute() {
    axios({
      method: "POST",
      url: "https://api.shortlist.nyc/account/update",
      headers: {},
      data: {
        accountId: this.accountId,
        preferences: this.preferences,
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