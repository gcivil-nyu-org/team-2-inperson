import { AxiosRequest, BaseShortlistCall } from "./baseCall";

export class fluentAccountMetadata extends BaseShortlistCall {
  #_accountId;
  #_email;
  constructor(baseEndpoint) {
    super();
    this.endpoint = new URL(baseEndpoint);
    this.axiosRequest = null;
    this.#_accountId = null;
    this.#_email = null;
    return this;
  }
  forAccountId(accountId) {
    this.#_accountId = accountId;
    this.#_email = null;
    return this;
  }
  forEmail(email) {
    this.#_email = email;
    this.#_accountId = null;
  }
  __build() {
    this.endpoint.pathname = "account/metadata";
    let headers = {};
    let data = {};

    if (this.#_accountId != null) {
      headers = { "x-shortlist-account": this.#_accountId };
    } else {
      data = { email: this.#_email };
    }
    this.axiosRequest = new AxiosRequest("POST", this.endpoint, headers, data);
  }
}
