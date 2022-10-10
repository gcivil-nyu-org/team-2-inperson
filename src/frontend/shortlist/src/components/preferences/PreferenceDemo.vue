<script>
import PreferenceManager from './PreferenceManager.vue';
import PreferenceManagerPage from "./PreferenceManagerPage.vue";
import PreferenceMultiSelect from './PreferenceMultiSelect.vue';
import PreferenceOneSelect from './PreferenceOneSelect.vue';
import PreferenceTypeText from './PreferenceTypeText.vue';
import PreferenceDropdown from './PreferenceDropdown.vue';
import PreferenceSlider from './PreferenceSlider.vue';

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
        q1: "",
        q2: [],
        q3: "",
        q4: "",
        q5: 4,
        submitted: false,
      }
    }
  },
  setup() {
    return {
      question1: {
        Name: "Instruction Mode",
        Text: "Which instruction mode do you prefer?",
        Options: [
          'Virtual',
          'Hybrid',
          'In-person',
        ]
      },
      question2: {
        Name: "Extra-Curriculars",
        Text: "Do you have any Extra-curricular interests?",
        Options: [
          'Sports',
          'Performing Arts',
          'STEM',
          'Others',
        ]
      },
      question3: {
        Name: "School Preference",
        Text: "Do you already have a school in mind?",
      },
      question4: {
        Name: "Transit",
        Text: "Is there a transit bus/train line you're interested in?",
        Options: [
            '1',
            '2',
            'A',
            'R',
        ]
      },
      question5: {
        Name: "Academic Performance",
        Text: "How would you rank your academic performance so far?",
        Min: 1,
        MinLabel: "Average",
        Max: 7,
        MaxLabel: "Excellent",
      }
    }
  }
}
</script>

<template> 
  <div style="font-size:12px; width:300px; background-color: yellow; padding: 15px; position: absolute; ">
    results:
    <pre>{{prefResults}}</pre>
  </div>
  <div class="preference-demo-container">
    <div class="preference-demo-component" v-if="!prefResults.submitted">

      <PreferenceManager title="Set Preferences" @preferenceSubmitted="prefResults.submitted = true">

        <PreferenceManagerPage id="0" subtitle="Instruction & Curriculum">
          <PreferenceOneSelect :question="question1" v-model="prefResults.q1"/>
          <PreferenceMultiSelect :question="question2" v-model="prefResults.q2"/>
        </PreferenceManagerPage>

        <PreferenceManagerPage id="1" subtitle="Location/School Specific">
          <PreferenceTypeText :question="question3" v-model="prefResults.q3"/>
          <PreferenceDropdown :question="question4" v-model="prefResults.q4"/>
        </PreferenceManagerPage>

        <PreferenceManagerPage id="2" subtitle="This or that...">
          <PreferenceSlider :question="question5" v-model="prefResults.q5"/>
        </PreferenceManagerPage>
      </PreferenceManager>

    </div>
  </div>
</template>

<style scoped>
.preference-demo-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.preference-demo-component {
  width: 600px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #779886, -14px -14px 20px white;
}
</style>