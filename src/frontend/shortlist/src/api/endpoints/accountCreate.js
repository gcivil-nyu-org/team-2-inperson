import md5 from "md5";
import { BaseShortlistCall, AxiosRequest } from "./baseCall";

export class fluentAccountCreate extends BaseShortlistCall {
  #_email;
  #_preferredName;
  #_passwordHash;
  #_accountType;
  constructor(baseEndpoint) {
    super();
    this.endpoint = new URL(baseEndpoint);
    this.axiosRequest = null;
    this.#_email = null;
    this.#_preferredName = "Shortlist User";
    this.#_passwordHash = null;
  }
  withEmail(email) {
    this.#_email = email;
    return this;
  }
  withPassword(password) {
    this.#_passwordHash = md5(password);
    return this;
  }
  withPreferredName(name) {
    this.#_preferredName = name;
    return this;
  }
  withAccountType(type) {
    this.#_accountType = type;
    return this;
  }
  __build() {
    this.endpoint.pathname = "account/create";
    let headers = {};
    let data = {
      email: this.#_email,
      preferredName: this.#_preferredName,
      passwordHash: this.#_passwordHash,
      accountType: this.#_accountType,
    };
    this.axiosRequest = new AxiosRequest("POST", this.endpoint, headers, data);
    console.log("built");
  }
}
