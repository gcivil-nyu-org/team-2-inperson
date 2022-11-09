import md5 from "md5";
import { BaseShortlistCall, AxiosRequest } from "./baseCall";

export class fluentAccountSignup extends BaseShortlistCall {
  #_email;
  #_firstName;
  #_lastName;
  #_password;
  #_accountType;
  constructor(baseEndpoint) {
    super();
    this.endpoint = new URL(baseEndpoint);
    this.axiosRequest = null;
    this.#_email = null;
    this.#_firstName = null;
    this.#_lastName = null;
    this.#_accountType = "P";
  }
  withEmail(email) {
    this.#_email = email;
    return this;
  }
  withPassword(password) {
    this.#_password = password;
    return this;
  }
  withFirstName(name) {
    this.#_firstName = name;
    return this;
  }
  withLastName(name) {
    this.#_lastName = name;
    return this;
  }
  withAccountType(type) {
    this.#_accountType = type;
    return this;
  }
  __build() {
    this.endpoint.pathname = "account/signup";
    let headers = {};
    let data = {
      email: this.#_email,
      // preferredName: this.#_preferredName,
      firstName: this.#_firstName,
      lastName: this.#_lastName,
      passwordHash: this.#_password,
      accountType: this.#_accountType,
    };
    this.axiosRequest = new AxiosRequest("POST", this.endpoint, headers, data);
    console.log("built");
  }
}
