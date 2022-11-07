import axios from "axios";

export class fluentRecommendations {
  #_accountId;
  #_count;
  #_strategy;
  #_success;
  #_fail;
  constructor() {
    this.#_accountId = null;
    this.#_count = 5;
    this.#_strategy = "RANKING";
    this.#_success = () => {};
    this.#_fail = console.log;
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
  successCallback(cb) {
    this.#_success = (result) => {
      cb(result);
    };
    return this;
  }
  failureCallback(cb) {
    this.#_fail = (result) => {
      cb(result);
    };
    return this;
  }
  do() {
    const baseEndpoint = new URL("https://api.shortlist.nyc");
    baseEndpoint.pathname = "recommendation";
    baseEndpoint.searchParams.append("accountId", this.#_accountId);
    baseEndpoint.searchParams.append("count", this.#_count);
    axios
      .get(baseEndpoint.toString())
      .then((result) => {
        this.#_success(result);
      })
      .catch((e) => {
        this.#_fail(e);
      });
  }
}
