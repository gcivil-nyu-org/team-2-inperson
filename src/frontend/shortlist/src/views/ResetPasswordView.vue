<script>
  export default {
    name: "ResetPasswordView",
    data() {
      return {
        isMatched: false,
        notMatchingMessage: "",
        passwordAlert: "",
        validation: true,
        newPassword: "",
        newConfirmPassword: "",
      };
    },
    methods: {
      validatePassword() {
      let passwordPattern = new RegExp(
        "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)"
      );
      if (this.form.newPassword.length < 8) {
        this.passwordAlert = "Minimum length is 8 for password!";
        return false;
      }
      if (this.form.newPassword.length > 15) {
        this.passwordAlert = "Maximum length is 15 for password!";
        return false;
      }
      if (!passwordPattern.test(this.form.newPassword)) {
        this.passwordAlert =
          "Invalid Password. At least 1 digit, 1 lower case, 1 upper case, and 1 special required.";
        return false;
      }
      return true;
    },
    validateConfirmPassword() {
      return this.form.newConfirmPassword == this.form.newConfirmPassword;
    },
    }
  }
</script>

<template>
  <main style="margin: auto">
    <div class="form-container">
      <div>
        <label id = "instructions" >Current Password</label>
        <input type="text" />
      </div>
      <div>
        <label id = "instructions" >New Password</label>
        <input type="text" />
      </div>
      <div>
        <label id = "instructions">Confirm New Password</label>
        <input type="text" />
      </div>

      <button id ="big-instructions" class="btn btn-outline-dark" @click.prevent="submitSignupForm">
        Submit
      </button>
    </div>
  </main>
</template>

<style scoped>
.form-container {
  position: absolute;
  margin-left: 30%;
  margin-top: 4%;
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
#big-instructions {
  font-size: 28px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
#instructions{
  font-size: 18px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
</style>
