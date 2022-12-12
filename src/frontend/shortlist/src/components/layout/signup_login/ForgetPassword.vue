<script>
import axios from "axios";
export default {
  name: "ForgetPassword",
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
  methods: {
    validateEmail(email) {
      let emailPattern = new RegExp(
        "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
      );
      return emailPattern.test(email);
    },
    successGet(responseData) {
      console.log(responseData);
      alert(
        "Thank you, your password reset link has been sent. Please check your email."
      );
    },
    submitForgetForm() {
      axios
        .post("https://api.shortlist.nyc/auth/request-reset-email", {
          email: this.form.email,
        })
        .then((email) => this.successGet(email))
        .catch(function (error) {
          console.log(error.response);
        });
    },
  },
  computed: {
    isSubmitDisabled() {
      return this.validateEmail(this.form.email);
    },
  },
};
</script>

<template>
  <main style="margin: auto">
    <div class="form-container">
      <!-- <div class = "reset"> -->
      <label class="reset"> Reset Your Password</label>
      <!-- </div> -->
      <div>
        <div class="email">
          <label>Your Email</label>
        </div>
        <input
          class="resetInput"
          type="text"
          placeholder="email"
          v-model="this.form.email"
        />
        <div class="input-errors" v-if="!validateEmail(this.form.email)">
          <div class="error-msg" v-if="this.form.email.length > 0">
            Invalid email entry!
          </div>
          <div class="error-msg" v-else>&nbsp;</div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
        </div>
      </div>
      <button
        id="big-instructions"
        class="btn btn-outline-dark"
        @click.prevent="submitForgetForm"
        :disabled="!isSubmitDisabled"
      >
        Submit
      </button>
    </div>
  </main>
</template>

<style>
.form-container {
  position: absolute;
  margin-left: 34%;
  margin-top: 3%;
  padding: 5%;
  display: flex;
  align-items: center;
  background-color: #8fbc8f;
  display: grid;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 0 0 3em hsl(231deg 62% 80%);
}
label {
  font-size: 18px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #008037;
  border-radius: 5px;
}
#big-instructions {
  font-size: 22px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
#instructions {
  font-size: 18px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
.resetInput {
  width: 100%;
  padding: 8px 5px;
  background: #ebf3e6;
  border: 1px solid #008037;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: "Aleo", serif;
  outline: none;
  transition: border-color 0.2s;
  position: relative;
  margin: 0px;
}

.error-msg {
  color: rgb(117, 28, 28);
  font-size: 13px;
  padding-bottom: 7px;
}

form {
  min-width: 100%;
  max-width: 100%;
  padding: 1em;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  font-family: "Aleo";
  margin: 0px;
}
.form-control {
  background: #ebf3e6;
  border: 1px solid #008037;
  border-radius: 5px;
  color: grey;
  font-size: 15px;
  font-family: "Aleo", serif;
}
.form-control:focus {
  border-color: #106021;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,
    0px 0px 8px rgba(35, 173, 40, 0.5);
}
.email {
  margin-left: 32%;
}
.reset {
  font-size: 30px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
  margin-bottom: 4%;
}
</style>
