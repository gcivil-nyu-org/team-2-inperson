<script>
import axios from "axios";

export default {
  data() {
    return {
      prefs: ""
    }

  },
  mounted() {
    axios
      .post('https://api.shortlist.nyc/account/metadata', {},
      {
        headers: {'x-shortlist-account':'e44278fec4984522b156cae1a8b3981d'}
      })
      .then((response) => {
        let alldata = JSON.parse(JSON.stringify(response.data));
        this.prefs = alldata['preferences']
      })
      .catch((err) => {
        console.log("AXIOS ERR:", err.response.data);
      });
  },
}
</script>

<template>
  <main>
    <label class="pref-title">Preferences</label>
    <form class="prefprofileform">
      <template v-for="(val, key) in prefs">
      <label class="pref-q-name">{{ val.Question }}</label>
      <input
        type="text"
        class="profilefields"
        :placeholder="val.Response"

        id="firstname"
      />
    </template>
    </form>
  </main>
</template>
<style scoped>
.prefprofileform {
  padding: 10px;
  width: 100%;
}
.pref-title {
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

.pref {
  border: 1px solid grey;
  width: 25%;
  white-space: nowrap;
}

.prefq {
  grid-area: 1 / 1 / 2 / 2;
}
.prefresp {
  grid-area: 1 / 3 / 2 / 4;
}
.prefedit {
  grid-area: 1 / 5 / 2 / 6;
}
</style>
