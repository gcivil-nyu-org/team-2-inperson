<script>
import Logo from "./Logo.vue";
import { userLoginStore } from "../../../states/userLogin";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  name: "Login",
  components: { Logo },
  setup() {
    const loginState = userLoginStore();
    return { v$: useVuelidate(), loginState };
  },
  data() {
    return {
      form: {
        // For log in
        username_login: "",
        password_login: "",
        email_login: "",
      },
      // Alerts
      // alert_login: "",
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
    loginWithPassword() {
      this.alert_login = "";
      if (
        this.email_login == this.loginState.userEmail &&
        this.password_login == this.loginState.userPassword
      ) {
        this.loginState.loggedIn = true;
        this.$router.push("/");
      } else {
        this.alert_login = "Either Email or Password does not correct!";
        return;
      }
    },
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
    <div id="alert_login" v-if="alert_login">{{ alert_login }}</div>
    <form @submit.prevent="loginWithPassword">
      <h1 class="instructions" id="big">Log In</h1>
      <div id="emailaddress_login">
        <label>
          Email address
          <input type="email" v-model="email_login" />
        </label>
      </div>
      <div id="password_login">
        <label>
          Password
          <input type="password" name="password" v-model="password_login" />
        </label>
      </div>
      <div>
        <button
          type="button"
          v-on:click="loginWithPassword()"
          class="btn btn-outline-dark"
        >
          Login
        </button>
        <p class="instructions" id="small">or</p>
        <button @click.prevent="loginWithSSO" class="btn btn-outline-dark">
          Log In with Google
        </button>
        <p class="instructions" id="small">Don't have an account yet?</p>
        <button @click="$router.push('/signup')" class="btn btn-outline-dark">
          Sign me up!
        </button>
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
  color: red;
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
</style>
