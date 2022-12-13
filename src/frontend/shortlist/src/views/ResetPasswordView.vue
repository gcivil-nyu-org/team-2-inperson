<script>
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  name: "ResetPasswordView",
  emits: ["logoutEvent"],
  setup() {
    return { router: useRoute() };
  },
  data() {
    return {
      form: {
        email: "",
        newPassword: "",
        confirmPassword: "",
      },
      passwordAlert: "",
      validation: true,
    };
  },
  methods: {
    validateEmail() {
      let emailPattern = new RegExp(
        "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
      );
      return emailPattern.test(this.form.email);
    },
    validateNewPassword() {
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
      return this.form.newPassword == this.form.confirmPassword;
    },
    submitPWResetForm() {
      axios
        .patch("https://api.shortlist.nyc/auth/password-reset-complete", {
          password: this.form.newPassword,
          token: this.$route.query.token,
          uidb64: this.$route.query.uidb64,
        })
        .then((response) => this.passwordChanged(response))
        .catch(function (error) {
          if (error) {
            console.log(error.response.data);
          }
          alert("Your password cannot be reset. Try again.");
        });
      return;
    },
    passwordChanged(response) {
      console.log(response); // [object, obecjt]
      this.$emit("logoutEvent");
      this.$router.push({
        path: "login",
        query: { pwChanged: true },
      });
    },
  },
  computed: {
    isSubmitDisabled() {
      if (!this.validation) {
        return false;
      } else {
        return !(
          this.validateEmail() &&
          this.validateNewPassword() &&
          this.validateConfirmPassword()
        );
      }
    },
  },
};
</script>

<template>
  <main style="margin: auto">
    <div class="form-container">
      <div class="email">
        <label>Your Email</label>
        <input
          class="resetInput"
          type="text"
          placeholder="email"
          v-model="this.form.email"
        />
        <div class="input-errors" v-if="!validateEmail()">
          <div class="error-msg" v-if="this.form.email.length > 0">
            Invalid email entry!
          </div>
          <div class="error-msg" v-else>&nbsp;</div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
        </div>
      </div>
      <div class="current-password">
        <div id="newPassword">
          <label>New Password</label>
          <input
            class="resetInput"
            type="password"
            placeholder="new password"
            v-model="this.form.newPassword"
          />
          <div class="input-errors" v-if="!validateNewPassword()">
            <div class="error-msg" v-if="this.form.newPassword.length > 0">
              {{ this.passwordAlert }}
            </div>
            <div class="error-msg" v-else>&nbsp;</div>
          </div>
          <div class="input-errors" v-else>
            <div class="error-msg">&nbsp;</div>
          </div>
        </div>
        <div>
          <div id="confirmPassword">
            <label>Confirm Password</label>
            <input
              class="resetInput"
              type="password"
              autocomplete="off"
              placeholder="confirm new password"
              v-model="this.form.confirmPassword"
            />
            <div class="input-errors" v-if="!validateConfirmPassword()">
              <div
                class="error-msg"
                v-if="this.form.confirmPassword.length > 0"
              >
                New Password and Confirm Password must be match!
              </div>
            </div>
            <div class="input-errors" v-else>
              <div class="error-msg">&nbsp;</div>
            </div>
          </div>
        </div>
        <button
          id="big-instructions"
          class="btn btn-outline-dark"
          @click.prevent="submitPWResetForm"
          :disabled="isSubmitDisabled"
        >
          Submit
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.form-container {
  position: absolute;
  margin-left: 34%;
  margin-top: 3%;
  padding: 5%;
  display: flex;
  align-items: center;
  background-color: #8fbc8f;
  display: grid;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 0 0 3em hsl(231deg 62% 80%);
}
label {
  font-size: 18px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
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
  margin-left: 30%;
  font-size: 28px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
#instructions {
  font-size: 18px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
.resetInput {
  width: 100%;
  padding: 8px 5px;
  background: #ebf3e6;
  border: 1px solid #008037;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: "Aleo", serif;
  outline: none;
  transition: border-color 0.2s;
  position: relative;
  margin: 0px;
}

.error-msg {
  color: rgb(117, 28, 28);
  font-size: 13px;
  padding-bottom: 7px;
}

form {
  min-width: 100%;
  max-width: 100%;
  padding: 1em;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  font-family: "Aleo";
  margin: 0px;
}
.form-control {
  background: #ebf3e6;
  border: 1px solid #008037;
  border-radius: 5px;
  color: grey;
  font-size: 15px;
  font-family: "Aleo", serif;
}
.form-control:focus {
  border-color: #106021;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
    0px 0px 8px rgba(35, 173, 40, 0.5);
}
</style>
