<script>
</script>

<template>
  <main style="margin:auto;">
    <div class="form-container">
        <div>
          <label>Current Password</label>
          <input type="text"/>
        </div>
        <div>
          <label>New Password</label>
          <input type="text"/>
        </div>
        <div>
          <label>Confirm New Password</label>
          <input type="text"/>
        </div>


        <button
          class="btn btn-outline-dark"
          @click.prevent="submitSignupForm"
        >Submit</button>
  </div>
  </main>
</template>

<style scoped>
.form-container {
  position: absolute;
  margin: auto;
  padding: 5%;
  display: flex;
  align-items: center;
  background-color: #8fbc8f;
  display: grid;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 0 0 3em hsl(231deg 62% 80%);
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #008037;
  border-radius: 5px;
}
</style>