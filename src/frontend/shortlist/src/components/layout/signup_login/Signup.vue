<script>
import Logo from "./Logo.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

export function validPassword(password) {
  let validPasswordPattern = new RegExp(
    "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)"
  );
  if (validPasswordPattern.test(password)) {
    return true;
  }
  return false;
}

export default {
  name: "Signup",
  components: { Logo },
  emits: ["appAccountSignup"],
  setup() {
    return { v$: useVuelidate() };
  },
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
  validations() {
    return {
      form: {
        firstName: {
          required,
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
          maxLength: maxLength(15),
        },
        lastName: {
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
          maxLength: maxLength(10),
        },
        email: {
          required,
          email,
        },
        password: {
          required,
          name_validation: {
            $validator: validPassword,
            $message:
              "Invalid Password. At least 1 digit, 1 lower case, 1 upper case, and 1 special required.",
          },
          minLength: minLength(8),
          maxLength: maxLength(15),
        },
        confirmPassword: {
          required,
          sameAsPassword: sameAs(this.form.password),
        },
      },
    };
  },
  methods: {
    submitSignupForm() {
      this.v$.$validate();
      this.alert_signup = "";
      if (this.v$.$error) {
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
        <input
          type="text"
          placeholder="First Name"
          v-model="v$.form.firstName.$model"
          class="signupinput"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.firstName.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div id="last_name">
        <input
          type="text"
          placeholder="Last Name"
          v-model="v$.form.lastName.$model"
          class="signupinput"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.lastName.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div id="email_address_signup">
        <input
          type="email"
          placeholder="Email"
          class="signupinput"
          v-model="v$.form.email.$model"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.email.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div id="password_signup">
        <input
          type="password"
          placeholder="Password"
          class="signupinput"
          v-model="v$.form.password.$model"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.password.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div>
        <input
          type="password"
          v-model="v$.form.confirmPassword.$model"
          autocomplete="off"
          placeholder="Confirm Password"
          class="signupinput"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.confirmPassword.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <button
        id = "signupButtonTest"
        :disabled="v$.form.$invalid"
        class="btn btn-outline-dark"
        @click.prevent="submitSignupForm"
      >
        Sign up
      </button>
      <p class="instructions" id="small">Have an account already?</p>
      <button @click="$router.replace('/login')" class="btn btn-outline-dark">
        Log me in!
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
.signup_components_container {
  position: absolute;
  left: 60%;
  top: 38%;
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
</style>
