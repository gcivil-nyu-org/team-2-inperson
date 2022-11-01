<script>
import Logo from "./Logo.vue";
import { userLoginStore } from "../../../states/userLogin";

export default {
  name: "Signup",
  components: { Logo },
  setup() {
    const loginState = userLoginStore();
    return { loginState };
  },
  data() {
    return {
      // For sign up
      first_name: "",
      last_name: "",
      email_signup: "",
      password_signup: "",
      passwordVerify_signup: "",
      // Alerts
      alert_signup: "",
    };
  },
  methods: {
    signupWithPassword() {
      this.alert_signup = "";
      if (this.password_signup !== this.passwordVerify_signup) {
        this.alert_signup = "Your Passwords do not match!";
        return;
      } else {
        this.loginState.userFirstName = this.first_name;
        this.loginState.userEmail = this.email_signup;
        this.loginState.userPassword = this.password_signup;

        this.alert_signup = "Thanks for signing up! Please go to login."
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
  <!-- Sign Up -->
  <div class="signup_components_container">
    <div id="alert_signup" v-if="alert_signup">{{ alert_signup }}</div>
    <form @submit.prevent="signupWithPassword">
      <h1 class="instructions" id="big">Sign Up</h1>
      <div id="first_name">
        <label>
          First Name
          <input type="text" v-model="first_name" />
        </label>
      </div>
      <div id="last_name">
        <label>
          Last Name
          <input type="text" v-model="last_name" />
        </label>
      </div>
      <div id="email_address_signup">
        <label>
          Email
          <input type="email" v-model="email_signup" />
        </label>
      </div>
      <div id="password_signup">
        <label>
          Password
          <input type="password" v-model="password_signup" />
        </label>
      </div>
      <label>
        Verify Password
        <input type="password" v-model="passwordVerify_signup" />
      </label>
      <button type="submit" @click.prevent="signupWithPassword">Sign up</button>
      <p class="instructions" id="small">or</p>
      <button @click.prevent="signupWithSSO">Sign up with Google</button>
      <p class="instructions" id="small">Have an account already?</p>
      <button @click="$router.push('/login')">Log me in!</button>
    </form>
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
  left: 70%;
  top: 38%;
  height: 575px;
  margin-top: -150px;
  width: 450px;
  margin-left: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bcd6a2;
  padding: 3em;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 0 0 3em hsl(231deg 62% 80%);
}
#alert_signup {
  color: red;
  margin-bottom: 2px;
}
#sign_up_sign {
  position: relative;
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
</style>
