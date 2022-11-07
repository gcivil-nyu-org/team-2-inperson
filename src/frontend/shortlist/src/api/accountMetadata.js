import { BaseShortlistCall } from "./baseCall";

export class fluentAccountMetadata extends BaseShortlistCall {
  #_accountId;
  #_email;
  constructor() {
    super();
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
  buildCall() {
    const baseEndpoint = new URL("https://api.shortlist.nyc");
    baseEndpoint.pathname = "account/metadata";
    if (this.#_accountId != null) {
      return {
        method: "POST",
        url: baseEndpoint,
        config: {
          headers: { "x-shortlist-account": this.#_accountId },
        },
        data: {},
      };
    } else {
      return {
        method: "POST",
        url: baseEndpoint,
        data: { email: this.#_email },
      };
    }
  }
}
