import { fluentAccountCreate } from "./endpoints/accountCreate";
import { fluentAccountMetadata } from "./endpoints/accountMetadata";
import { fluentRecommendations } from "./endpoints/recommendations";
import { fluentAccountSignup } from "./endpoints/accountSignup";

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
  signupUser(payload, successCb, failCb) {
    return new temporarySignup(payload, successCb, failCb);
    // return new fluentAccountSignup(this.baseEndpoint);
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
      // email success;
      .then(() => {
        // register the site account
        axios({
          method: "POST",
          url: "https://api.shortlist.nyc/account/create",
          headers: {},
          data: {
            email: this.email,
            preferredName: this.firstName,
            passwordHash: this.passwordHash,
            accountType: this.accountType,
            preferences: {
              schoolPreferences: {},
              firstName: this.firstName,
              lastName: this.lastName,
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
