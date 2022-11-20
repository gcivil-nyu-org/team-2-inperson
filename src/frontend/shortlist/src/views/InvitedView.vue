<script>
import { mapState } from "pinia";
import { sessionStore } from "../states/sessionStore";
import UserDetails from "../components/layout/profile/UserDetails.vue";

export default {
  emits: ["appAccountUpdateProfile", "addStudent"],
  components: {
    UserDetails,
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
    <div class="statusdetails">
      <UserDetails
        :accountMetadata="accountMetadata"
        @appAccountUpdateName="(p) => this.$emit('appAccountUpdateName', p)"
      />
    </div>
  </main>
</template>
