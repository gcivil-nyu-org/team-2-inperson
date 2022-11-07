import axios from "axios";

export class BaseShortlistCall {
  #_success;
  #_fail;
  constructor() {
    this.#_success = () => {};
    this.#_fail = console.log;
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
  buildCall() {
    return {
      method: "NONE",
      url: new URL(),
      config: {},
      data: {},
    };
  }
  execute() {
    let callConfig = this.buildCall();
    if (callConfig.method == "GET") {
      axios
        .get(callConfig.url.toString(), callConfig.config)
        .then((result) => this.#_success(result))
        .catch((err) => this.#_fail(err));
    } else if (callConfig.method == "POST") {
      axios
        .post(callConfig.url.toString, callConfig.data, callConfig.config)
        .then((result) => this.#_success(result))
        .catch((err) => this.#_fail(err));
    }
  }
}
