<script>
import { mapState } from "pinia";
import { sessionStore } from "../states/sessionStore";
import UserDetails from "../components/layout/profile/UserDetails.vue";
import UserPreference from "../components/layout/profile/UserPreference.vue";
import UserRelations from "../components/layout/profile/UserRelations.vue";
//import axios from "axios";

export default {
  emits: ["appAccountUpdatePreferences", "appAccountUpdateName", "addStudent"],
  components: {
    UserDetails,
    UserPreference,
    UserRelations,
  },
  computed: {
    ...mapState(sessionStore, {
      loginState: "loginState",
      accountMetadata: "accountMetadata",
    }),
  },
};
</script>

<template>
  <main>
    <div class="profile">
      <UserDetails
        :accountMetadata="accountMetadata"
        @appAccountUpdateName="(p) => this.$emit('appAccountUpdateName', p)"
      />
      <UserPreference
        :accountMetadata="accountMetadata"
        @appAccountUpdatePreferences="
          (p) => this.$emit('appAccountUpdatePreferences', p)
        "
      />
      <UserRelations
        :accountMetadata="accountMetadata"
        @addStudent="(e) => this.$emit('addStudent', e)"
      />
    </div>
  </main>
</template>

<style scoped>
.profile {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 0.9fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>
