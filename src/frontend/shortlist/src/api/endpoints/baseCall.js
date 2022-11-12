import axios from "axios";

export class AxiosRequest {
  constructor(method, url, headers, data) {
    this.method = method;
    this.url = url;
    this.headers = headers;
    this.data = data;
  }
}

export class BaseShortlistCall {
  #_successFn;
  #_failFn;
  constructor() {
    this.axiosRequest = null;
    this.#_successFn = null;
    this.#_failFn = console.log;
  }
  onSuccess(cbFn) {
    this.#_successFn = cbFn;
    return this;
  }
  onFail(cbFn) {
    this.#_failFn = cbFn;
    return this;
  }
  execute() {
    this.__build();
    axios({
      method: this.axiosRequest.method,
      url: this.axiosRequest.url.toString(),
      headers: this.axiosRequest.headers,
      data: this.axiosRequest.data,
    })
      .then((result) => this.#_successFn(result))
      .catch((err) => this.#_failFn(err));
  }
}
