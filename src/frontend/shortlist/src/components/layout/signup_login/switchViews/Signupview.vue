<script>
import Navbar from "./../Navbar.vue";
import Logo from "./../Logo.vue";

export default {
  name: "Signupview",
  components: { Navbar, Logo },
  data() {
    return {
      // For sign up
      email_signup: "",
      username_signup: "",
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
        this.alert_signup = "You have successfully signed up an account!";
        return;
      }
    },
    signupWithSSO() {
      Userfront.signup({ method: "google" });
    },
  },
};
</script>

<template>
  <!-- <div class="homepage"> -->
    <!-- Navbar -->
    <Navbar />
    <!-- Logo  -->
    <div class = "logo">
      <Logo />
    </div>
    <!-- Sign Up -->
    <div class="signup_components_container">
    <div id="alert_signup" v-if="alert_signup">{{ alert_signup }}</div>
    <form @submit.prevent="signupWithPassword">
      <h1 class = "instructions" id = "big">Sign Up</h1>
      <div id="email_address_signup">
        <label>
          Email address
          <input type="email" v-model="email_signup" />
        </label>
      </div>
      <div id="username_signup">
        <label>
          Username
          <input type="text" v-model="username_signup" />
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
      <button type="submit">Sign up</button>
      <p class = "instructions" id = "small">or</p>
      <button @click.prevent="signupWithSSO">Sign up with Google</button>
      <p class = "instructions" id = "small">Have an account already?</p>
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
  top: 40%;
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
