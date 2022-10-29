<script>
export default {
  name: "signup",
  data() {
    return {
      email: "",
      accountName: "",
      password: "",
      passwordVerify: "",
      alert: ""
    };
  },
  methods: {
    signupWithPassword() {
      this.alert = "";
      if (this.password !== this.passwordVerify) {
        this.alert = "Your Passwords do not match!";
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
        this.alert = error.message;
      });
    },
  }
};
</script>

<template>
 <div id="signup_components_container">
    <div id="alert" v-if="alert">{{ alert }}</div>
    <form @submit.prevent="signupWithPassword">
      <div id = "email_address">
      <label>
        Email address
        <input type="email" v-model="email" />
      </label>
      </div>
      <div id = "account_name">
      <label>
        Account name 
        <input type="text" v-model="accountName" />
      </label>
      </div>
      <div id = "password">
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
  left: 30%;
  top: 50%;
  height: 300px;
  margin-top: -150px; 
  width: 300px;
  margin-left: -100px; 
  /* width: 70%;
  height: 100%;
  margin-top: 200px; 
  margin-left: 20%; 
  margin-right: 20%; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>