<script>
import PreferenceManager from '../components/preferences/PreferenceManager.vue';
import PreferenceMultiSelect from '../components/preferences/PreferenceMultiSelect.vue';

export default {
  name: "StageView",
  components: { PreferenceManager, PreferenceMultiSelect }
}

</script>

<template> 
<div class="stage-container">
  <div class="stage-component">
    <PreferenceManager title="Set Preferences" subtitle="What do you care about most?">
      
      <PreferenceManagerPage id="0">
        <PreferenceMultiSelect 
          responseId="dimensions"
          questionName="Hello"
          questionText="Which is your favorite type of pizza?"
          :questionOptions="[
            'Teacher Ratings',
            'Onion and Broccoli',
            'tomato',
            'no pizza for me',
          ]"
        />
      
        <PreferenceMultiSelect 
          responseId="dimensions2"
          questionName="Hello"
          questionText="Which is your favorite type of pizza?"
          :questionOptions="[
            'Teacher Ratings',
            'Onion and Broccoli',
            'tomato',
            'no pizza for me',
          ]"
        />

        <PreferenceMultiSelect 
          responseId="dimensions3"
          questionName="Hello"
          questionText="Which is your favorite type of pizza?"
          :questionOptions="[
            'Teacher Ratings',
            'Onion and Broccoli',
            'tomato',
            'no pizza for me',
          ]"
        />
      </PreferenceManagerPage>
      
      <PreferenceManagerPage id="1">
        <PreferenceMultiSelect 
          responseId="dimensions"
          questionName="Hello"
          questionText="Which is your favorite type of pizza?"
          :questionOptions="[
            'Teacher Ratings',
            'Onion and Broccoli',
            'tomato',
            'no pizza for me',
          ]"
        />
      
        <PreferenceMultiSelect 
          responseId="dimensions2"
          questionName="Hello"
          questionText="Which is your favorite type of pizza?"
          :questionOptions="[
            'Teacher Ratings',
            'Onion and Broccoli',
            'tomato',
            'no pizza for me',
          ]"
        />

        <PreferenceMultiSelect 
          responseId="dimensions3"
          questionName="Hello"
          questionText="Which is your favorite type of pizza?"
          :questionOptions="[
            'Teacher Ratings',
            'Onion and Broccoli',
            'tomato',
            'no pizza for me',
          ]"
        />
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