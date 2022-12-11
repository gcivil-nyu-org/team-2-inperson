<script>
export default {
  name: "Signup",
  emits: ["appAccountSignup"],
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      nameAlert: "",
      passwordAlert: "",
      validation: true,
    };
  },
  methods: {
    validateName(value) {
      let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
      if (value.length < 2) {
        this.nameAlert = "Minimum length is 2 for name!";
        return false;
      }
      if (value.length > 10) {
        this.nameAlert = "Maximum length is 10 for name!";
        return false;
      }
      if (!validNamePattern.test(value)) {
        this.nameAlert =
          "Valid name only contain letters, dashes (-) and spaces (No starting spaces)!";
        return false;
      }
      return true;
    },
    validateEmail() {
      let emailPattern = new RegExp(
        "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
      );
      return emailPattern.test(this.form.email);
    },
    validatePassword() {
      let passwordPattern = new RegExp(
        "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)"
      );
      if (this.form.password.length < 8) {
        this.passwordAlert = "Minimum length is 8 for password!";
        return false;
      }
      if (this.form.password.length > 15) {
        this.passwordAlert = "Maximum length is 15 for password!";
        return false;
      }
      if (!passwordPattern.test(this.form.password)) {
        this.passwordAlert =
          "Invalid Password. At least 1 digit, 1 lower case, 1 upper case, and 1 special required.";
        return false;
      }
      return true;
    },
    validateConfirmPassword() {
      return this.form.password == this.form.confirmPassword;
    },
    // TODO (Pooja): ID file required validation here

    submitSignupForm() {
      // TRIGGER SIGNUP EVENT
      this.$emit("appAccountSignup", {
        email: this.form.email.trim(),
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        password: this.form.password,
      });
      return;
    },
  },
  computed: {
    isSignUpDisabled() {
      if (!this.validation) {
        return false;
      } else {
        return !(
          this.validateName(this.form.firstName) &&
          this.validateName(this.form.lastName) &&
          this.validateEmail() &&
          this.validatePassword() &&
          this.validateConfirmPassword()
        );
      }
    },
  },
};
</script>

<template>
  <div class="logo_image_container">
    <router-link to="/" class="nav-item nav-link">
      <img src="/logo.png" class="logo_img"
    /></router-link>
  </div>
  <div class="signup_components_container">
    <div class="signup-form-container">
      <h1 class="instructions" id="big">Sign Up</h1>
      <div class="first_name">
        <input
          type="text"
          placeholder="First Name"
          class="signupinput"
          v-model="this.form.firstName"
        />
        <div class="input-errors" v-if="!validateName(this.form.firstName)">
          <div class="error-msg" v-if="this.form.firstName.length > 0">
            {{ this.nameAlert }}
          </div>
          <div class="error-msg" v-else>&nbsp;</div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
        </div>
      </div>
      <div id="last_name">
        <input
          type="text"
          placeholder="Last Name"
          class="signupinput"
          v-model="this.form.lastName"
        />
        <div class="input-errors" v-if="!validateName(this.form.lastName)">
          <div class="error-msg" v-if="this.form.lastName.length > 0">
            {{ this.nameAlert }}
          </div>
          <div class="error-msg" v-else>&nbsp;</div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
        </div>
      </div>

      <div id="email_address_signup">
        <input
          type="email"
          placeholder="Email"
          class="signupinput"
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
      <div id="password_signup">
        <input
          type="password"
          placeholder="Password"
          class="signupinput"
          v-model="this.form.password"
        />
        <div class="input-errors" v-if="!validatePassword()">
          <div class="error-msg" v-if="this.form.password.length > 0">
            {{ this.passwordAlert }}
          </div>
          <div class="error-msg" v-else>&nbsp;</div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
        </div>
      </div>
      <div>
        <input
          type="password"
          autocomplete="off"
          placeholder="Confirm Password"
          class="signupinput"
          v-model="this.form.confirmPassword"
        />
        <div class="input-errors" v-if="!validateConfirmPassword()">
          <div class="error-msg">
            Password and Confirm Password must be match!
          </div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
        </div>
      </div>
      <!-- TODO (Pooja): Birthdate field -->
      <button
        class="btn btn-outline-dark"
        id="signupButtonTest"
        @click.prevent="submitSignupForm"
        :disabled="isSignUpDisabled"
      >
        Sign up
      </button>
      <p class="instructions" id="small">
        Have an account already?
        <button @click="$router.replace('/login')" class="btn btn-outline-dark">
          Log me in!
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped>
button,
input {
  display: block;
  margin-bottom: 10px;
}
.signup_components_container {
  position: absolute;
  left: 60%;
  top: 35%;
  height: auto;
  margin-top: -150px;
  width: 600px;
  margin-left: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bcd6a2;
  padding: 2em;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 0 0 3em hsl(231deg 62% 80%);
}
.signup-form-container {
  display: inline-block;
  width: 100%;
  justify-content: flex-start;
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
  font-size: 24px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
#big.instructions {
  font-size: 50px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
.signupinput {
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
