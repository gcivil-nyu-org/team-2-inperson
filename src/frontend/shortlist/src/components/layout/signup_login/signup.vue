<script>
export default {
  name: "signup_login",
  data() {
    return {
      // For log in
      username_login: "",
      password_login: "",
      email_login: "",

      // For sign up
      email_signup: "",
      username_signup: "",
      password_signup: "",
      passwordVerify_signup: "",

      // Alerts
      alert_login: "",
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
    loginWithSSO() {
      Userfront.login({ method: "google" });
    },
  },
};
</script>

<template>
  <div id="nav">
    <!-- Nav Bar -->
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="/favicon.ico" id="favicon_img"
      /></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/About" class="nav-item nav-link">About</router-link>
          <router-link to="/preferences" class="nav-link"
            >My Preferences</router-link
          >
          <router-link to="/categorize" class="nav-link"
            >School Profiles</router-link
          >
          <router-link to="/Contact" class="nav-link">Contact</router-link>
        </div>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
  <router-view />
  <!-- Logo  -->
  <div id="logo_image_container">
    <router-link to="/" class="nav-item nav-link">
      <img src="/logo.png" id="logo_img"
    /></router-link>
  </div>
  <!-- Sign Up -->
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
  <!-- Log in  -->
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

#logo_img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
}

#logo_image_container {
  position: relative;
  width: 300px;
  height: 300px;
  margin-top: 100px;
}

#alert_signup {
  color: red;
  margin-bottom: 10px;
}

#alert_login {
  color: red;
  margin-bottom: 10px;
}

#favicon_img {
  width: 30px;
}

#nav {
  background: whitesmoke;
  margin: auto;
}
#nav {
  padding: 15px;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 15px;
}
#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: 0.5rem;
  padding: 15px;
}

#log_in_sign {
  position: relative;
  top: 0;
}

#sign_up_sign {
  position: relative;
  top: 0;
}

.d-flex {
  margin-left: auto;
}
</style>
