<script>
import PreferenceManager from '../components/preferences/PreferenceManager.vue';
import PreferenceMultiSelect from '../components/preferences/PreferenceMultiSelect.vue';
import PreferenceOneSelect from '../components/preferences/PreferenceOneSelect.vue';
import PreferenceTypeText from '../components/preferences/PreferenceTypeText.vue';
import PreferenceDropdown from '../components/preferences/PreferenceDropdown.vue';
import PreferenceSlider from '../components/preferences/PreferenceSlider.vue';
export default {
  name: "StageView",
  components: { PreferenceManager, PreferenceMultiSelect, PreferenceOneSelect,
                PreferenceTypeText, PreferenceDropdown, PreferenceSlider }
}

</script>

<template> 
<div class="stage-container">
  <div class="stage-component">
    <PreferenceManager title="Set Preferences" subtitle="What do you care about most?">
      <div>
      <PreferenceManagerPage id="0">
        <PreferenceOneSelect 
          questionId="Curricular"
          questionText="School programs offering?"
          :questionOptions="[
            'Virtual',
            'Hybrid',
            'Both',
          ]"
        />
      
        <PreferenceMultiSelect 
          questionId="Extra-Curricular"
          questionText="Sports preference?"
          :questionOptions="[
            'Cricket',
            'Football',
            'Tennis',
            'Basketball',
          ]"
        />
      </PreferenceManagerPage>
      
      <PreferenceManagerPage id="1">
        <PreferenceTypeText 
          questionId="Other"
          questionText="Enter school name in your mind."
        />
        <PreferenceDropdown
          questionId="Travel"
          questionText="Subway decide"
          :questionOptions="[
            '1',
            '2',
            'A',
            'R',
          ]"
        />
        <PreferenceDropdown
          questionId="Curricular"
          questionText="Interest Areas"
          :questionOptions="[
            'Animal Science',
            'Engineering',
            'Science & Math',
            'Law & Government',
          ]"
        />
        <PreferenceSlider 
          questionId="School-Status"
          questionText="School rank level? [left to right: low to high rank]"
          min="0"
          max="10"
        />
      </PreferenceManagerPage>
    </div>
      
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