<script>
import { mapState } from "pinia";
import { sessionStore } from "../../../states/sessionStore";

export default {
  name: "Login",
  emits: ["appAccountLogin"],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
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
    validatePassword() {
      return this.form.password.length > 6 && this.form.password.length < 20;
    },
    submitLoginForm(redirect) {
      this.$emit("appAccountLogin", {
        email: this.form.email.trim(),
        password: this.form.password,
        redirect: redirect || "/",
      });
    },
  },
  computed: {
    isLoginDisabled() {
      if (!this.validation) {
        return false;
      } else {
        return !(this.validateEmail() && this.validatePassword());
      }
    },
    // this also contains a "loginAttemps" state, which we will use to get
    // the data about whether the login attempt failed
    ...mapState(sessionStore, {
      loginState: "loginState",
      loginAttempts: "loginAttempts",
      accountMetadata: "accountMetadata",
    }),
  },
  mounted() {
    if (this.$route) {
      let params = this.$route.query;
      this.pwChanged = params.pwChanged;
      this.firstTime = params.firstTime;
      this.firstTimeSignup = params.firstTimeSignup;
      if (this.pwChanged == "true") {
        alert("Your password has been changed. Please log in again.");
        this.pwChanged = "false";
      }
      if (this.firstTime == "true") {
        alert("Please go to your profile and update your preference!");
        this.firstTime = "false";
      } else if (this.firstTimeSignup == "true") {
        alert("Please check your email and verify your account!");
        this.firstTimeSignup = "false";
      }
    }
  },
};
</script>

<template>
  <div class="logo_image_container">
    <router-link to="/" class="nav-item nav-link">
      <img src="/logo.png" class="logo_img" alt="shortlistlogo"
    /></router-link>
  </div>
  <div class="login_components_container">
    <h1 class="instructions" id="big">Log In</h1>
    <form v-on:keyup.enter="submitLoginForm(this.$route.query.redirect)">
      <div id="emailaddress_login">
        <input
          id="loginEmailField"
          type="email"
          class="logininput"
          placeholder="Email"
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
      <div id="password_login">
        <input
          id="loginPasswordField"
          type="password"
          name="password"
          v-model="this.form.password"
          class="logininput"
          placeholder="Password"
        />
        <div class="input-errors" v-if="!validatePassword()">
          <div class="error-msg" v-if="this.form.password.length > 0">
            Invalid password length!
          </div>
          <div class="error-msg" v-else>&nbsp;</div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
        </div>
      </div>

      <div>
        <button
          id="submitLoginFormTest"
          type="button"
          class="btn btn-outline-dark"
          :disabled="isLoginDisabled"
          @click="submitLoginForm(this.$route.query.redirect)"
        >
          Login
        </button>

        <router-link to="/forgetPassword" class="nav-item nav-link">
          <p class="instructions" id="small">Forgot Password?</p>
        </router-link>
      </div>
      <br />
    </form>
    <div>
      <button
        @click="$router.replace('/signup')"
        class="btn btn-outline-dark"
        style="font-family: Aleo"
      >
        Create New Account
      </button>
    </div>
  </div>
</template>

<style scoped>
button,
input {
  display: block;
  margin-bottom: 10px;
}

.login_components_container {
  position: absolute;
  left: 65%;
  top: 38%;
  height: 575px;
  margin-top: -150px;
  width: 450px;
  margin-right: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8fbc8f;
  padding: 3em;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 0 0 3em hsl(231deg 62% 80%);
}

.logo_img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
}
.logo_image_container {
  position: relative;
  left: 20%;
  width: 500px;
  height: 500px;
  margin-top: 100px;
}
#small.instructions {
  font-size: 15px;
  font-weight: 400;
  font-family: "Aleo";
}
#big.instructions {
  font-size: 50px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}

.logininput {
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
  padding-bottom: 10px;
}
form {
  min-width: 100%;
  max-width: 100%;
  padding: 1em;
}
</style>
