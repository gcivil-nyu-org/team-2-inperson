<script>
import axios from "axios";

export default {
  emits: ["addStudent"],
  data() {
    return {
      newEmail: "",
      validationresult: false,
      validation: true,
      inviteSented: false,
    };
  },
  methods: {
    validateEmail() {
      if (this.validation) {
        let emailPattern = new RegExp(
          "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"
        );
        this.validationresult = emailPattern.test(this.newEmail);
      } else {
        this.validationresult = true;
      }
    },
    sendInvite() {
      this.validateEmail();
      if (this.validationresult == true) {
        axios
          //address needs change to coop
          .post("https://api.shortlist.nyc/auth/send-invite", {
            //name might need change
            email: this.newEmail,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error.response);
          });
        this.newEmail = "";
        alert("Invitation Sent!");
      } else {
        alert("Invalid Email Entry!");
      }
      this.inviteSented = true;
    },
  },
};
</script>
<template>
  <main>
    <label class="relprofiletitle">Invite Others</label>&nbsp;
    <span>
      <input
        type="email"
        class="emailInput"
        placeholder="Enter Email"
        v-model="newEmail"
      />&nbsp;
      <button
        type="button"
        @click="this.sendInvite"
        class="btn btn-outline-light"
        id="send-invite-button"
      >
        <img src="/add-student.png" class="studentupdateimg" alt="addstudent" />
      </button>
    </span>
  </main>
</template>
<style scoped>
main {
  height: 40px;
  background-color: #020202;
  padding-left: 35%;
}
.relprofiletitle {
  font-family: "Cabin Sketch", cursive;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0px 10px 10px 10px;
  line-height: 2rem;
  color: #ffffff;
}

.studentupdateimg {
  vertical-align: middle;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 1px;
}

.emailInput {
  background: #ebf3e6;
  border: 1px solid #008037;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: "Aleo", serif;
  outline: none;
  transition: border-color 0.2s;
  margin-bottom: 0px;
}
</style>
