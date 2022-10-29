<script>
export default {
  name: "signup",
  data() {
    return {
      email: "",
      accountName: "",
      password: "",
      passwordVerify: "",
      alert: "",
      inEditMode: false,
      localSettings: { ...this.listSettings },
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
      signupWithSSO() {
        Userfront.signup({ method: "google" });
      },
    },
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
    <p> or </p>
    <button @click.prevent="signupWithSSO">Sign up with Google</button>
  </div>
  <div id="logo_image_container">
        <img src="/logo.png" id="logo_img" />
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
  /* border: 5px solid black; */
  /* left: 15%;
  top: 50%;
  height: 10px;
  margin-top: 100px; 
  width: 10px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center; */
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>