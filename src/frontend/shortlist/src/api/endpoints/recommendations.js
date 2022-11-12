import { AxiosRequest, BaseShortlistCall } from "./baseCall";

export class fluentRecommendations extends BaseShortlistCall {
  #_accountId;
  #_count;
  #_strategy;
  constructor(baseEndpoint) {
    // this is where we set defaults
    super();
    this.endpoint = new URL(baseEndpoint);
    this.axiosRequest = null;
    this.#_accountId = null;
    this.#_count = 5;
    this.#_strategy = "RANKING";
    return this;
  }
  forAccountId(accountId) {
    this.#_accountId = accountId;
    return this;
  }
  count(cnt) {
    this.#_count = cnt;
    return this;
  }
  strategy(strategy) {
    this.#_strategy = strategy;
    return this;
  }
  __build() {
    this.endpoint.pathname = "recommendation";
    let headers = {};
    let data = {};
    this.endpoint.searchParams.append("accountId", this.#_accountId);
    this.endpoint.searchParams.append("count", this.#_count);
    this.axiosRequest = new AxiosRequest("GET", this.endpoint, headers, data);
  }
}
