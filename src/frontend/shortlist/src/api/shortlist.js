import { fluentAccountMetadata } from "./accountMetadata";
import { fluentRecommendations } from "./recommendations";

const shortlistApi = {
  getRecommendations: fluentRecommendations,
  getAccountMetadata: fluentAccountMetadata,
};

export default shortlistApi;
