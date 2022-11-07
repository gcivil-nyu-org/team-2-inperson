import { fluentAccountCreate } from "./endpoints/accountCreate";
import { fluentAccountMetadata } from "./endpoints/accountMetadata";
import { fluentRecommendations } from "./endpoints/recommendations";

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
}
