<script>
import { mapState } from "pinia";
import { sessionStore } from "../states/sessionStore";
import UserDetails from "../components/layout/profile/UserDetails.vue";
import UserPreference from "../components/layout/profile/UserPreference.vue";
import UserRelations from "../components/layout/profile/UserRelations.vue";

export default {
  emits: ["appAccountUpdatePreferences"],
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
      <div class="statusdetails">
        <UserDetails :accountMetadata="accountMetadata" />
      </div>
      <div class="prefrel">
        <UserPreference
          :accountMetadata="accountMetadata"
          @appAccountUpdatePreferences="
            (p) => this.$emit('appAccountUpdatePreferences', p)
          "
        />
        <UserRelations :accountMetadata="accountMetadata" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.profile {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 0fr 4fr repeat(2, 0fr);
  grid-template-rows: 1fr repeat(4, 0fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.statusdetails {
  grid-area: 1 / 1 / 2 / 2;
  padding: 2%;
}
.prefrel {
  grid-area: 1 / 3 / 2 / 4;
  padding: 2%;
}
</style>
