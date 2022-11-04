<script>
import UserDetails from "../components/layout/profile/UserDetails.vue";
import UserPreference from "../components/layout/profile/UserPreference.vue";
import UserRelations from "../components/layout/profile/UserRelations.vue";
export default {
  components: {
    UserDetails, UserPreference, UserRelations,
  },
};
</script>
<template>
    <main>
        <UserDetails/>
        <UserPreference/>
        <UserRelations/>
    </main>
</template>
<style scoped>

</style>
