<script>
import Logo from "./Logo.vue";

export default {
  name: "Signup",
  components: { Logo },
  emits: ["appAccountSignup"],
  data() {
    return {
      // For sign up
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      // Alerts
      alert_signup: "",
    };
  },
  methods: {
    submitSignupForm() {
      this.alert_signup = "";
      if (this.alert_signup) {
        this.alert_signup = "Form failed validation";
        return;
      } else {
        // TRIGGER SIGNUP EVENT
        this.$emit("appAccountSignup", {
          email: this.form.email,
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          password: this.form.password,
        });
        return;
      }
    },
  },
};
</script>

<template>
  <div class="logo"><Logo /></div>
  <div class="signup_components_container">
    <div id="alert_signup" v-if="alert_signup">{{ alert_signup }}</div>
    <div class="signup-form-container">
      <h1 class="instructions" id="big">Sign Up</h1>
      <div id="first_name">
        <input type="text" placeholder="First Name" class="signupinput" />
        <div class="input-errors">
          <div class="error-msg"></div>
        </div>
      </div>
      <div id="last_name">
        <input type="text" placeholder="Last Name" class="signupinput" />
        <div class="input-errors">
          <div class="error-msg"></div>
        </div>
      </div>
      <div id="email_address_signup">
        <input type="email" placeholder="Email" class="signupinput" />
        <div class="input-errors">
          <div class="error-msg"></div>
        </div>
      </div>
      <div id="password_signup">
        <input type="password" placeholder="Password" class="signupinput" />
        <div class="input-errors">
          <div class="error-msg"></div>
        </div>
      </div>
      <div>
        <input
          type="password"
          autocomplete="off"
          placeholder="Confirm Password"
          class="signupinput"
        />
        <div class="input-errors">
          <div class="error-msg"></div>
        </div>
      </div>

      <div class="mb-3">
        <label for="formFile" class="form-label"
          >Upload Parent/Guardian ID:</label
        >
        <input class="form-control" type="file" id="formFile" />
      </div>

      <button class="btn btn-outline-dark" @click.prevent="submitSignupForm">
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
#alert_signup {
  color: rgb(141, 0, 0);
  margin-bottom: 2px;
}
#sign_up_sign {
  position: static;
  top: 0;
}
.logo {
  position: relative;
  left: 20%;
  width: 700px;
  height: 700px;
  margin-top: 80px;
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
}

.error-msg {
  color: rgb(117, 28, 28);
  margin: 0;
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
