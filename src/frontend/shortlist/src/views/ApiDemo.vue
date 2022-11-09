<script>
import ShortlistApi from "../api/shortlist";

const shortlistApi = new ShortlistApi("https://api.shortlist.nyc/");

export default {
  setup() {
    // These are just samples for demonstration purposes
    const anAccount = "99156bf3a5254c368e54c990b8865b4a"; // needs to have recos
    const anEmail = "checkRecos2@email.com"; // needs to not exist if you want to see create
    return { anAccount, anEmail };
  },
  data() {
    // This is data that is available to this component and all children
    return {
      loggedInUser: {},
      recommendations: {},
    };
  },
  methods: {
    // these methods actually execute api calls based on events
    createAccount(email) {
      let req = shortlistApi
        .createAccount()
        .withAccountType("PARENT")
        .withEmail(email)
        .withPreferredName("Tester")
        .withPassword("abcdsdf")
        .onSuccess((result) => {
          this.getMetadata(result.data);
        })
        .onFail((err) => {
          console.log("fail", err.response.status, err.response.data);
          this.loggedInUser = "ERROR - EMAIL EXISTS";
        });
      req.execute();
    },
    getMetadata(accountId) {
      let req = shortlistApi
        .getAccountMetadata()
        .forAccountId(accountId)
        .onSuccess((result) => {
          this.loggedInUser = result.data;
        })
        .onFail((err) => {
          console.log("fail", err.response.status, err.response.data);
        });
      req.execute();
    },
    getRecommendations(accountId) {
      let req = shortlistApi
        .getRecommendations()
        .forAccountId(accountId)
        .count(10)
        .strategy("RANKING")
        .onSuccess((result) => {
          console.log("run");
          console.log(result);
          this.recommendations = result.data;
        })
        .onFail((err) => {
          console.log("fail", err.response.status, err.response.data);
          this.recommendations = "ERROR GETTING RECOMMENDATIONS";
        });
      req.execute();
    },
  },
  mounted() {},
};
</script>

<template>
  <div
    style="width: 100%; display: flex; justify-content: center; flex-wrap: wrap"
  >
    <div class="api-output">
      <div class="call-title">
        <div>CALL: account/create</div>
        <button @click.prevent="createAccount(anEmail)">EXECUTE</button>
      </div>
      <div style="width: 100%; max-height: 500px; overflow-y: auto">
        <pre>{{ loggedInUser }}</pre>
      </div>
    </div>
    <div class="api-output">
      <div class="call-title">
        <div>CALL: account/metadata</div>
        <button @click.prevent="getMetadata(anAccount)">EXECUTE</button>
      </div>
      <div style="width: 100%; max-height: 500px; overflow-y: auto">
        <pre>{{ loggedInUser }}</pre>
      </div>
    </div>
    <div class="api-output">
      <div class="call-title">
        <div>CALL: recommendations</div>
        <button @click.prevent="getRecommendations(anAccount)">EXECUTE</button>
      </div>
      <div style="width: 100%; max-height: 500px; overflow-y: auto">
        <pre>{{ recommendations }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.api-output {
  font-size: 10px;
  display: flex;
  width: 80%;
  border: 1px solid grey;
  padding: 20px;
  flex-wrap: wrap;
}
.call-title {
  width: 100%;
  font-size: 20px;
  background: yellow;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
