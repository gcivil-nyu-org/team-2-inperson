<script setup>
import MaterialIcon from "../components/icons/MaterialIcon.vue";
export default {
  components: { MaterialIcon },
};
</script>

<template>
  <main>
    <div class="home-container">
      <div class="logo-row">
        <img src="/logo.png"/>
      </div>
      <div class="icons-row">
        <div class="icon-container">
          <MaterialIcon src="home" color="rgba(55, 126, 64, .9)" size="50" />
          <MaterialIcon
            src="library_add"
            color="rgba(55, 126, 64, .9)"
            size="50"
          />
          <MaterialIcon src="login" color="rgba(55, 126, 64, .9)" size="50" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.logo-row {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.icons-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.icon-container {
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  border: 2px rgba(55, 125, 64) solid;
  box-shadow: 0 0 8px 5px rgba(10, 10, 10, 0.1);
  padding: 15px;
  background-color: rgba(55, 125, 64, 0.2);
}
</style>
