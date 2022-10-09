<script>
import PreferenceManager from '../components/preferences/PreferenceManager.vue';
import PreferenceManagerPage from "../components/preferences/PreferenceManagerPage.vue";
import PreferenceMultiSelect from '../components/preferences/PreferenceMultiSelect.vue';
import PreferenceOneSelect from '../components/preferences/PreferenceOneSelect.vue';
import PreferenceTypeText from '../components/preferences/PreferenceTypeText.vue';
import PreferenceDropdown from '../components/preferences/PreferenceDropdown.vue';
import PreferenceSlider from '../components/preferences/PreferenceSlider.vue';


export default {
  name: "StageView",
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
  <div class="stage-container">
    <div class="stage-component">

      <PreferenceManager v-if="!prefResults.submitted" title="Set Preferences" @preferenceSubmitted="prefResults.submitted = true">

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
.stage-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.stage-component {
  border: 10px solid black;
  width: 600px;
}
</style>