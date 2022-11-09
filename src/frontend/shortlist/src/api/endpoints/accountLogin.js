import { AxiosRequest, BaseShortlistCall } from "./baseCall";
import md5 from "md5";
export class fluentAccountLogin extends BaseShortlistCall {
  #_email;
  #_passwordHash;
  constructor(baseEndpoint) {
    super();
    this.endpoint = new URL(baseEndpoint);
    this.axiosRequest = null;
    this.#_email = null;
    this.#_passwordHash = null;
    return this;
  }
  forEmail(email) {
    this.#_email = email;
  }
  forPassword(password) {
    this.#_passwordHash = md5(password);
    return this;
  }
  __build() {
    this.endpoint.pathname = "account/login";
    let headers = {};
    let data = {
      email: this.#_email,
      password: this.#_passwordHash,
    };

    this.axiosRequest = new AxiosRequest("POST", this.endpoint, headers, data);
  }
}
