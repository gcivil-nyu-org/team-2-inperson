<script>
import { mapState } from "pinia";
import { sessionStore } from "../states/sessionStore";
import UserDetails from "../components/layout/profile/UserDetailsInvite.vue";

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

<style scoped>
.statusdetails {
  width: 50%;
  height: 100%;
  padding: 2%;
  margin-left: auto;
  margin-right: 0;
}
</style>