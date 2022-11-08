<script>
import PreferenceDemo from "../../preferences/PreferenceDemo.vue";
export default {
  components: {
    PreferenceDemo,
  },
};
</script>

<template>
  <PreferenceDemo />
</template>
<style scoped>
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
