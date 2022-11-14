<script>
import Logo from "./Logo.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { mapState } from "pinia";
import { sessionStore } from "../../../states/sessionStore";

export default {
  name: "Login",
  emits: ["appAccountLogin"],
  components: { Logo },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      // Alerts
      alert_login: "",
    };
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(8),
        },
      },
    };
  },
  methods: {
    submitLoginForm() {
      this.alert_login = "";
      this.v$.$validate();
      if (this.v$.$error) {
        this.alert_signup = "Form failed validation";
        return;
      }
      this.$emit("appAccountLogin", {
        email: this.form.email,
        password: this.form.password,
      });
    },
  },
  computed: {
    // this also contains a "loginAttemps" state, which we will use to get
    // the data about whether the login attempt failed
    ...mapState(sessionStore, {
      loginState: "loginState",
      loginAttempts: "loginAttempts",
      accountMetadata: "accountMetadata",
    }),
  },
};
</script>

<template>
  <!-- Logo  -->
  <div class="logo">
    <Logo />
  </div>
  <!-- Log In -->
  <div class="login_components_container">
    <h1 class="instructions" id="big">Log In</h1>
    <div id="alert_login" v-if="alert_login">{{ alert_login }}</div>
    <form>
      <div class="form-group" :class="{ error: v$.form.email.$errors.length }">
        <div id="emailaddress_login">
          <input
            type="email"
            class="logininput"
            placeholder="Email"
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
        <div
          class="form-group"
          :class="{ error: v$.form.password.$errors.length }"
        >
          <div id="password_login">
            <input
              type="password"
              name="password"
              v-model="v$.form.password.$model"
              class="logininput"
              placeholder="Password"
            />
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.password.$errors"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>
        <div>
          <button
            id="loginButtonTest"
            type="button"
            class="btn btn-outline-dark"
            :disabled="v$.form.$invalid"
            @click="submitLoginForm"
          >
            Login
          </button>
          <!-- TODO: Forgot password feature -->
          <p class="instructions" id="small">or</p>
          <button @click.prevent="loginWithSSO" class="btn btn-outline-dark">
            Log In with Google
          </button>
          <p class="instructions" id="small">Don't have an account yet?</p>
          <button
            @click="$router.replace('/signup')"
            class="btn btn-outline-dark"
          >
            Sign me up!
          </button>
        </div>
      </div>
    </form>
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

#alert_login {
  color: rgb(141, 0, 0);
  margin-bottom: 10px;
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
