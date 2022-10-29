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
      // inEditMode: false,
      // localSettings: { ...this.listSettings },
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
    login() {
      this.alert_login = "";
      // if (this.password !== this.passwordVerify) {
      //   this.alert = "Your Passwords do not match!";
      //   return;
      // }
        if((this.input.emailaddress != "" || this.input.username != "") && this.input.password != "") {            
          if((this.input.emailaddress == this.$parent.mockAccount.emailaddress || this.input.username == this.$parent.mockAccount.username) && this.input.password == this.$parent.mockAccount.password) {
                            this.$emit("authenticated", true);
                            this.$router.replace({ name: "secure" });
                } else {
                            this.alert_login = "Your Passwords do not match!";
                            return;
                }
                } else {
                    this.alert_login = "You have successfully logged in.";
                    return; 
                }
            }
    },
};
</script>

<template>
  <div id="logo_image_container">
        <img src="/logo.png" id="logo_img" />
  </div>
 <div id="signup_components_container">
    <div id="alert" v-if="alert">{{ alert }}</div>
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
        <div id="alert" v-if="alert">{{ alert }}</div>
    <form @submit.prevent="login">
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
        v-on:click="login()">Login</button>
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

/* #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #006400;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    } */
</style>