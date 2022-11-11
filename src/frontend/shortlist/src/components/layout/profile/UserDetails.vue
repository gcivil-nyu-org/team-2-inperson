<script>
export default {
  props: ["accountMetadata"],
  methods: {
    loadFile: function (event) {
      var image = document.getElementById("output");
      image.src = URL.createObjectURL(event.target.files[0]);
      console.log(image.src);
    },
  },
};
</script>
<template>
  <main>
    <form class="profileform">
      <img
        src="/default-parent-profile.png"
        alt="Profile-Picture"
        id="profileimg"
        class="profileimg"
      />
      <img src="/edit.png" /><br />
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
          <label class="typestatuslabel">Verification Status:</label
          >&nbsp;<button
            class="pendingstatus"
            title="Account verification may take some time!"
            disabled
          >
            PENDING
          </button>
        </div>

        <input
          type="text"
          class="profilefields"
          :placeholder="
            'First Name:  ' + accountMetadata.preferences.userFirstName
          "
          id="firstname"
        />
        <input
          type="text"
          class="profilefields"
          :placeholder="
            'Last Name:  ' + accountMetadata.preferences.userLastName
          "
          id="lastname"
        />
        <input
          type="text"
          class="profilefields"
          :placeholder="accountMetadata.email"
          id="useremail"
        />

        <label class="fileidlabel"
          >Current Uploaded ID File Name From API</label
        >
        <div class="upload-file-wrapper">
          <button class="btn btn-outline-success btn-sm">
            Upload New ID <input type="file" name="myfile" />
          </button>
        </div>
        <br />
        <button class="pref-actions" @click="clicker('Back')">
          Update Changes
        </button>
      </div>
    </form>
    <button class="delparent">
      Delete Account Permanently
      <img src="/del-parent.png" class="parentdeleteimg" />
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
  margin-bottom: 20px;
}

.accountstatus {
  width: 100%;
  font-size: 18px;
  font-family: "Cabin Sketch", cursive;
  font-weight: 500;
  margin-bottom: 20px;
}

.pendingstatus:disabled {
  border: none;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  color: black;
  font-weight: bold;
  border-radius: 5%;
  background-color: rgb(244, 244, 147);
  font-size: medium;
  font-family: "Klee One", cursive;
  float: left;
}
.pendingstatus:hover {
  background-color: rgb(255, 230, 0);
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

.pref-actions button {
  padding: 20px;
  background-color: #008037;
}

.upload-file-wrapper {
  position: relative;
  overflow: hidden;
}
.btn input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  display: inline-block;
}

.fileidlabel {
  color: rgb(137, 137, 137);
  background: #ebf3e6;
  border: 1px solid #008037;
  border-radius: 5%;
  font-size: small;
  padding: 1%;
  float: left;
  margin-right: 5px;
}

.parentdeleteimg {
  vertical-align: middle;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.delparent {
  background: transparent;
  border: 1px solid #000000;
  padding: 5px 5px;
  color: #000000;
  border-radius: 3px;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  left: 100px;
}
.delparent:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 120%;
  background: #811919;
  top: 0;
  left: -140px;
  border-radius: 0 20px 20px 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}
.delparent:hover {
  transform: translateY(5px);
  color: #ffffff;
}
.delparent:hover:before {
  left: 0;
  opacity: 1;
}
</style>
