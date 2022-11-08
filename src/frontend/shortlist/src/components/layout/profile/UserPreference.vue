<script>
import PreferenceDemo from "../../preferences/PreferenceDemo.vue";
import axios from "axios";

export default {
  components: {
    PreferenceDemo,
  },
  data() {
    return {
      prefs: {},
      prefupdateflag: false,
    };
  },
  methods: {
    updateflag() {
      this.prefupdateflag = !this.prefupdateflag;
    },
  },
  mounted() {
    axios
      .post(
        "https://api.shortlist.nyc/account/metadata",
        {},
        {
          headers: {
            "x-shortlist-account": "e44278fec4984522b156cae1a8b3981d",
          },
        }
      )
      .then((response) => {
        let alldata = JSON.parse(JSON.stringify(response.data));
        this.prefs = alldata["preferences"];
      })
      .catch((err) => {
        console.log("AXIOS ERR:", err.response.data);
      });
  },
};
</script>

<template>
  <span v-if="!prefupdateflag">
    <label class="prefprofiletitle">Preferences</label>
    <form class="prefprofileform">
      <template v-for="val in prefs" :key="val">
        <label class="pref-q-name">{{ val.Question }}</label>
        <input type="text" class="profilefields" :placeholder="val.Response" />
      </template>
    </form>
    <button @click="updateflag" class="btn btn-outline-dark">
      Update Preferences
    </button>
  </span>
  <span v-else>
    <PreferenceDemo />
    <button @click="updateflag" class="btn btn-outline-dark">Cancel</button>
  </span>
</template>
<style scoped>
button {
  margin: 0px 15px 15px 0px;
}
.prefprofileform {
  padding: 10px;
  width: 100%;
}
.prefprofiletitle {
  width: 100%;
  font-family: "Cabin Sketch", cursive;
  font-weight: bold;
  font-size: 2.5rem;
  padding-bottom: None;
  line-height: 2rem;
  color: #067418;
}
.pref-q-name {
  padding: 10px;
  width: 50%;
  font-family: "Klee One", cursive;
  font-weight: bold;
}
.profilefields {
  width: 50%;
  background: #ebf3e6;
  border: 1px solid #008037;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: "Aleo", serif;
  outline: none;
  transition: border-color 0.2s;
  margin-bottom: 20px;
}
</style>
