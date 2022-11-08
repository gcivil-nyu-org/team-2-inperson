<script>
import PreferenceManager from "./PreferenceManager.vue";
import PreferenceManagerPage from "./PreferenceManagerPage.vue";
import PreferenceMultiSelect from "./PreferenceMultiSelect.vue";
import PreferenceOneSelect from "./PreferenceOneSelect.vue";
import PreferenceTypeText from "./PreferenceTypeText.vue";
import PreferenceDropdown from "./PreferenceDropdown.vue";
import PreferenceSlider from "./PreferenceSlider.vue";

// TODO: unify all styles across components

export default {
  name: "PreferenceDemo",
  components: {
    PreferenceManager,
    PreferenceManagerPage,
    PreferenceMultiSelect,
    PreferenceOneSelect,
    PreferenceTypeText,
    PreferenceDropdown,
    PreferenceSlider,
  },
  data() {
    return {
      prefResults: {
        q1: { Question: "Which instruction mode do you prefer?", Response: "" },
        q2: {
          Question: "Do you have any Extra-curricular interests?",
          Response: [],
        },
        q3: { Question: "Do you already have a school in mind?", Response: "" },
        q4: {
          Question: "Is there a transit bus/train line you're interested in?",
          Response: "",
        },
        q5: {
          Question: "How would you rank your academic performance so far?",
          Response: 4,
        },
      },
      submitted: false,
    };
  },
  setup() {
    return {
      question1: {
        Name: "Instruction Mode",
        Text: "Which instruction mode do you prefer?",
        Options: ["Virtual", "Hybrid", "In-person"],
      },
      question2: {
        Name: "Extra-Curriculars",
        Text: "Do you have any Extra-curricular interests?",
        Options: ["Sports", "Performing Arts", "STEM", "Others"],
      },
      question3: {
        Name: "School Preference",
        Text: "Do you already have a school in mind?",
      },
      question4: {
        Name: "Transit",
        Text: "Is there a transit bus/train line you're interested in?",
        Options: ["1", "2", "A", "R"],
      },
      question5: {
        Name: "Academic Performance",
        Text: "How would you rank your academic performance so far?",
        Min: 1,
        MinLabel: "Average",
        Max: 7,
        MaxLabel: "Excellent",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.emitter.emit("submitPreferences", this.prefResults);
    },
  },
};
</script>

<template>
  <div class="preference-demo-container">
    <div class="preference-demo-component" v-if="!submitted">
      <PreferenceManager
        title="Set Preferences"
        @preferenceSubmitted="handleSubmit"
      >
        <PreferenceManagerPage id="0" subtitle="Instruction & Curriculum">
          <PreferenceOneSelect
            :question="question1"
            v-model="prefResults.q1.Response"
          />
          <PreferenceMultiSelect
            :question="question2"
            v-model="prefResults.q2.Response"
          />
        </PreferenceManagerPage>

        <PreferenceManagerPage id="1" subtitle="Location/School Specific">
          <PreferenceTypeText
            :question="question3"
            v-model="prefResults.q3.Response"
          />
          <PreferenceDropdown
            :question="question4"
            v-model="prefResults.q4.Response"
          />
        </PreferenceManagerPage>

        <PreferenceManagerPage id="2" subtitle="This or that...">
          <PreferenceSlider
            :question="question5"
            v-model="prefResults.q5.Response"
          />
        </PreferenceManagerPage>
      </PreferenceManager>
    </div>
  </div>
</template>

<style scoped>
.preference-demo-container {
  display: flex;
  flex-wrap: wrap;
  align-items: top;
}

.preference-demo-component {
  width: 100%;
  border-radius: 20px;
  padding: 0px;
  margin: 0;
  box-sizing: border-box;
  background: #fafdff;
}
</style>
