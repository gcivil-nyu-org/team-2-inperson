<script>
export default {
  name: "signup_login",
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
  },
};
</script>

<template>
  <div class="signup_components_container">
    <div id="alert_signup" v-if="alert_signup">{{ alert_signup }}</div>
    <form @submit.prevent="signupWithPassword">
      <h1 id="sign_up_sign">Sign Up</h1>
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
      <p>or</p>
      <button @click.prevent="signupWithSSO">Sign up with Google</button>
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
  left: 35%;
  top: 50%;
  height: 450px;
  margin-top: -150px;
  width: 450px;
  margin-left: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bcd6a2;
}
#alert_signup {
  color: red;
  margin-bottom: 10px;
}
#sign_up_sign {
  position: relative;
  top: 0;
}
</style>
