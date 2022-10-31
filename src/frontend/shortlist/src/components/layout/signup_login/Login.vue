<script>
export default {
  name: "Login",
  data() {
    return {
      // For log in
      username_login: "",
      password_login: "",
      email_login: "",

      // Alerts
      alert_login: "",
    };
  },
  methods: {
    loginWithPassword() {
      this.alert_login = "";
      if (
        (this.email_login != "" || this.username_login != "") &&
        this.password_login != ""
      ) {
        this.alert_login = "You have successfully logged in.";
        return;
      } else {
        this.alert_login = "Your Passwords do not match!";
        return;
      }
    },
  },
};
</script>

<template>
  <div class="login_components_container">
    <div id="alert_login" v-if="alert_login">{{ alert_login }}</div>
    <form @submit.prevent="loginWithPassword">
      <h1 id="log_in_sign">Log In</h1>
      <div id="emailaddress_login">
        <label>
          Email address
          <input type="email" v-model="email_login" />
        </label>
      </div>
      <div id="username_login">
        <label>
          Username
          <input type="text" name="username" v-model="username_login" />
        </label>
      </div>
      <div id="password_login">
        <label>
          Password
          <input type="password" name="password" v-model="password_login" />
        </label>
      </div>
      <div>
        <button type="button" v-on:click="loginWithPassword()">Login</button>
        <p>or</p>
        <button @click.prevent="loginWithSSO">Log In with Google</button>
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
  top: 50%;
  height: 450px;
  margin-top: -150px;
  width: 450px;
  margin-right: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #006400;
}

#alert_login {
  color: red;
  margin-bottom: 10px;
}

#log_in_sign {
  position: relative;
  top: 0;
}
</style>
