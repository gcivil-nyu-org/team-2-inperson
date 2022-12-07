<script>
export default {
  props: ["accountMetadata"],
  emits: ["appAccountUpdateName", "appResetPassword"],
  data() {
    return {
      newFirst: "",
      newLast: "",
      nameAlert: "",
      email: "",
      validation: true,
    };
  },
  methods: {
    appResetPassword(email) {
      this.$emit("appResetPassword", {
        email: email,
      })
    },
    validateName(value) {
      let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
      if (value.length < 2) {
        this.nameAlert = "Minimum length is 2 for name!";
        return false;
      }
      if (value.length > 10) {
        this.nameAlert = "Maximum length is 10 for name!";
        return false;
      }
      if (!validNamePattern.test(value)) {
        this.nameAlert =
          "Valid name only contain letters, dashes (-) and spaces (No starting spaces)!";
        return false;
      }
      return true;
    },

    loadFile: function (event) {
      var image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
      console.log(image.src);
    },
    updateName() {
      let userFirst = this.newFirst
        ? this.newFirst
        : this.accountMetadata.preferences.userFirstName;
      let userLast = this.newLast
        ? this.newLast
        : this.accountMetadata.preferences.userLastName;

      this.$emit("appAccountUpdateName", { userFirst, userLast });

      // reset name fields
      this.newFirst = "";
      this.newLast = "";

      alert("Name updated!");
    },
    resetPassword() {
      // TODO: call /auth/request-reset-email
      alert("Please check your email.")
      this.resetPassword(accountMetadata.email); 
    },
  },
  computed: {
    isUpdateDisabled() {
      if (!this.validation) {
        return false;
      } else {
        return !(
          this.validateName(this.newFirst) && this.validateName(this.newLast)
        );
      }
    },
  },
};
</script>
<template>
  <main>
    <form class="profileform">
      <div class="image-upload">
        <img
          src="/default-parent-profile.png"
          alt="Profile-Picture"
          id="profileimg"
          class="profileimg"
        />
        <label for="file-input"><img src="/edit.png" /></label>

        <input id="file-input" type="file" />
      </div>

      <div class="inputs">
        <div class="accountstatus">
          <label class="typestatuslabel">Account Type:</label>&nbsp;<button
            class="parenttype"
            title="After verification,You can send invite for Student account registration!"
            disabled
          >
            PARENT / GUARDIAN
          </button>
        </div>
        <div class="accountstatus">
          <label class="typestatuslabel">ID Status:</label>&nbsp;<button
            class="verifiedstatus"
            title="Successfully verified Parent/Guardian uploaded ID!"
            disabled
          >
            VERIFIED
          </button>
        </div>

        <div class="accountstatus">
          <label class="typestatuslabel">Email :</label>&nbsp;<label
            class="verifiedEmail"
          >
            {{ accountMetadata.email }}
          </label>
        </div>

        <label>First Name</label>
        <input
          type="text"
          class="profilefields"
          :placeholder="accountMetadata.preferences.userFirstName"
          id="firstname"
          v-model="newFirst"
        />
        <div class="input-errors" v-if="!validateName(this.newFirst)">
          <div class="error-msg" v-if="this.newFirst.length > 0">
            {{ this.nameAlert }}
          </div>
          <div class="error-msg" v-else>&nbsp;</div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
        </div>

        <label>Last Name</label>
        <input
          type="text"
          class="profilefields"
          :placeholder="accountMetadata.preferences.userLastName"
          id="lastname"
          v-model="newLast"
        />
        <div class="input-errors" v-if="!validateName(this.newLast)">
          <div class="error-msg" v-if="this.newLast.length > 0">
            {{ this.nameAlert }}
          </div>
          <div class="error-msg" v-else>&nbsp;</div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
        </div>

        <button
          class="pref-actions"
          @click="updateName"
          :disabled="isUpdateDisabled"
        >
          Update Changes
        </button>
      </div>
    </form>
    <button 
      type="button"
      class="btn btn-outline-dark btn-sm"
      @click.prevent="resetPassword">
      Reset Password
    </button>
  </main>
</template>
<style scoped>
main {
  border-radius: 2%;
  background-color: rgb(236, 236, 236);
}
.profileform {
  padding: 10px;
  width: 100%;
}
.inputs {
  padding: 10px;
}
.profileimg {
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-bottom: 20px;
}
.profilefields {
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
  margin-bottom: 0px;
}

.accountstatus {
  width: 100%;
  font-size: 18px;
  font-family: "Cabin Sketch", cursive;
  font-weight: 500;
  margin-bottom: 20px;
}

.verifiedstatus:disabled {
  border: none;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  color: black;
  font-weight: bold;
  border-radius: 5%;
  background-color: rgb(176, 221, 122);
  font-size: medium;
  font-family: "Klee One", cursive;
  float: left;
}
.verifiedstatus:hover {
  background-color: rgb(37, 137, 58);
  color: white;
  font-family: "Klee One", cursive;
}

.typestatuslabel {
  color: white;
  background-color: rgb(103, 97, 97);
  border-radius: 5%;
  font-size: small;
  padding: 1%;
  float: left;
  margin-right: 5px;
}

.parenttype:disabled {
  border: none;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  border-radius: 5%;
  background-color: rgb(108, 154, 185);
  font-size: medium;
  font-family: "Klee One", cursive;
  float: left;
}
.parenttype:hover {
  border: 1px solid #888;
  background-color: rgb(52, 47, 136);
  font-family: "Klee One", cursive;
}

.pref-actions {
  flex-wrap: wrap;
  align-items: center;
  font-weight: 500;
  background-color: black;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: "Libre Baskerville", serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.pref-actions:hover {
  box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
  background-color: #008037;
}

.pref-actions:disabled {
  box-shadow: rgba(255, 255, 255, 0.35) 0 -25px 18px -14px inset,
    rgba(255, 255, 255, 0.25) 0 1px 2px, rgba(255, 255, 255, 0.25) 0 2px 4px,
    rgba(255, 255, 255, 0.25) 0 4px 8px, rgba(255, 255, 255, 0.25) 0 8px 16px,
    rgba(255, 255, 255, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
  background-color: #000000;
}
.pref-actions button {
  padding: 20px;
  background-color: #008037;
}
.image-upload > input {
  display: none;
}

.verifiedEmail {
  margin: 0;
  font-family: "Libre Baskerville", serif;
  font-size: small;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  border-radius: 5%;
  background-color: rgb(108, 154, 185);
  padding: 4px;
}
.error-msg {
  color: rgb(117, 28, 28);
  font-size: 13px;
  padding-bottom: 7px;
}
</style>
