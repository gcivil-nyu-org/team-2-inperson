<script>
export default {
  name: "signup",
  data() {
    return {
      input: {
        username: "",
        password: "",
        emailaddress: "",
      },
      email: "",
      accountName: "",
      password: "",
      passwordVerify: "",
      alert_signup: "",
      alert_login: "", 
    };
  },
  methods: {
    signupWithPassword() {
      this.alert_signup = "";
      if (this.password !== this.passwordVerify) {
        this.alert_signup = "Your Passwords do not match!";
        return;
      }
      Userfront.signup({
        method: "password",
        email: this.email,
        password: this.password,
        data: {
          accountName: this.accountName
        }
      }).catch((error) => {
        this.alert_signup = error.message;
      });
    },
      signupWithSSO() {
        Userfront.signup({ method: "google" });
      },
    loginWithPassword() {
      this.alert_login = "";
        if((this.input.emailaddress != "" || this.input.username != "") && this.input.password != "") {   
          this.alert_login = "You have successfully logged in.";
                    return; }         
                else {
                    this.alert_login = "Your Passwords do not match!";
                    return;
                }
            }
    },
};
</script>

<template>
  <div id="nav">
  <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"> <img src="/favicon.ico" id="favicon_img" ></a>
    <!-- for mobile (if necessary) -->
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button> -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/About" class="nav-item nav-link">About</router-link>
            <router-link to="/preferences" class="nav-link">My Preferences</router-link>
            <router-link to="/categorize" class="nav-link">School Profiles</router-link>
            <router-link to="/Contact" class="nav-link">Contact</router-link>
        </div>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav>
 </div>
  <router-view/>

  <div id="logo_image_container">
    <router-link to="/" class="nav-item nav-link"> <img src="/logo.png" id="logo_img"/></router-link>
  </div>
 <div id="signup_components_container">
    <div id="alert_signup" v-if="alert_signup">{{ alert_signup }}</div>
    <form @submit.prevent="signupWithPassword">
      <div id = "email_address_signup">
      <label>
        Email address
        <input type="email" v-model="email" />
      </label>
      </div>
      <div id = "account_name_signup">
      <label>
        Username 
        <input type="text" v-model="accountName" />
      </label>
      </div>
      <div id = "password_signup">
      <label>
        Password
      <input type="password" v-model="password" />
      </label>
      </div>
      <label>
        Verify Password
      <input type="password" v-model="passwordVerify" />
      </label>
      <button type="submit">Sign up</button>
      <p> or </p>
    <button @click.prevent="signupWithSSO">Sign up with Google</button>
    </form>
  </div>
  <div id="login_components_container">
        <div id="alert_login" v-if="alert_login">{{ alert_login }}</div>
    <form @submit.prevent="loginWithPassword">
        <div id = "emailaddress_login">
          <label>
            email address
          <input type="text" name="emailaddress" v-model="input.eamiladdress" />
          </label>
        </div>
        <div id = "username_login">
          <label>
            Username
          <input type="text" name="username" v-model="input.username"/>
          </label>
        </div>
        <div id = "password_login">
          <label>
            Password
          <input type="password" name="password" v-model="input.password"/>
          </label>
        </div>
        <div>
        <button type="button" 
        v-on:click="loginWithPassword()">Login</button>
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

#signup_components_container {
  position: absolute;
  left: 35%;
  top: 50%;
  height: 400px;
  margin-top: -150px; 
  width: 400px;
  margin-left: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bcd6a2; 
}

#login_components_container {
  position: absolute;
  left: 65%;
  top: 50%;
  height: 400px;
  margin-top: -150px; 
  width: 400px;
  margin-right: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #006400; 
}

#logo_img {
  position: absolute;
  max-width:100%;
  max-height:100%;
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

#nav{
background: whitesmoke;
}
#nav {
  padding: 30px;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}



/* 
.d-flex {
  display: float;
  margin-right: 0; 
} */


</style>