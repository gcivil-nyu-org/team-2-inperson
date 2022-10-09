<script>
import PreferenceManager from '../components/preferences/PreferenceManager.vue';
import PreferenceManagerPage from "../components/preferences/PreferenceManagerPage.vue";
import PreferenceMultiSelect from '../components/preferences/PreferenceMultiSelect.vue';

export default {
  name: "StageView",
  components: { 
    PreferenceManager, 
    PreferenceMultiSelect, 
    PreferenceManagerPage 
  },
  data() {
    return {
      prefResults: {
        q1: [],
        q2: [],
        q3: [],
        q4: [],
        q5: [],
        q6: [],
        q7: [],
      }
    }
  },
  setup() {
    return {
      question1: {
        Name: "Question 1",
        Text: "Which is your favorite type of pizza?",
        Options: [
          'Teacher Ratings',
          'Onion and Broccoli',
          'tomato',
          'no pizza for me',
        ]
      },
      question2: {
        Name: "Question 2",
        Text: "How do you feel about vue?",
        Options: [
          'Suxor',
          'It\'s okay',
          'Great',
          'Haven\'t tried it',
        ]
      },
      question3: {
        Name: "Question 3",
        Text: "Another Page?",
        Options: [
          'Yes',
          "No",
        ]
      }
    }
  }
}

</script>

<template> 
<div style="font-size:10px; width:300px; background-color: yellow; padding: 15px; position: absolute; ">
  results:
<pre>{{prefResults}}</pre>
</div>
<div class="stage-container">
  <div class="stage-component">
    <PreferenceManager title="Set Preferences">
      <PreferenceManagerPage id="0" subtitle="Part 1 of our questions...">
        <PreferenceMultiSelect :question="question1" v-model="prefResults.q1"/>
        <PreferenceMultiSelect :question="question2" v-model="prefResults.q2"/>
      </PreferenceManagerPage>
      <PreferenceManagerPage id="1" subtitle="Part 2 of the q'aire">
        <PreferenceMultiSelect :question="question3" v-model="prefResults.q3"/>
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