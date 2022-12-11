<script>
import PreferenceDemo from "../../preferences/PreferenceDemo.vue";
import ModalFullScreen from "../ModalFullScreen.vue";

export default {
  emits: ["appAccountUpdatePreferences"],
  props: ["accountMetadata"],
  components: {
    PreferenceDemo,
    ModalFullScreen,
  },
  data() {
    let preferenceUpdateFlag = false;
    return {
      preferenceUpdateFlag,
    };
  },
  methods: {
    togglePreferenceForm() {
      this.preferenceUpdateFlag = !this.preferenceUpdateFlag;
    },
    updatePref(payload) {
      console.log("updated!", payload);
      this.$emit("appAccountUpdatePreferences", payload);
      this.togglePreferenceForm();
    },
  },
};
</script>

<template>
  <main>
    <div>
      <label class="prefprofiletitle">Preferences</label>
      <form class="prefprofileform">
        <template
          v-for="val in accountMetadata.preferences.recommendationPreferences"
          :key="val"
        >
          <label class="pref-q-name">{{ val.Question }}</label>
          <input
            type="text"
            class="profilefields"
            :placeholder="val.Response"
            disabled
          />
        </template>
      </form>
      <button @click="togglePreferenceForm" class="btn btn-outline-dark">
        Update Preferences
      </button>
    </div>
    <ModalFullScreen
      v-if="preferenceUpdateFlag"
      visible="preferenceUpdateFlag"
      @modalOff="preferenceUpdateFlag = false"
    >
      <div style="display: block">
        <div
          style="
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
          "
        >
          <PreferenceDemo
            @submitPreferences="updatePref"
            :currentPreferences="accountMetadata.preferences"
          />
        </div>
        <div style="padding-left: 45%">
          <button @click="togglePreferenceForm" class="btn btn-outline-dark">
            Exit
          </button>
        </div>
      </div>
    </ModalFullScreen>
  </main>
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
