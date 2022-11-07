<script>
export default {
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
        src="default-parent-profile.png"
        alt="Profile-Picture"
        id="profileimg"
        class="profileimg"
      />
      <img src="edit.png" /><br />
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
          placeholder="FirstNameFromAPI"
          id="firstname"
        />
        <input
          type="text"
          class="profilefields"
          placeholder="LastNameFromAPI"
          id="lastname"
        />
        <input
          type="text"
          class="profilefields"
          placeholder="EmailFromAPI"
          id="useremail"
        />

        <lable class="fileidlable"
          >Current Uploaded ID File Name From API</lable
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
        <div style="flex-grow: 1"></div>
      </div>
    </form>
  </main>
</template>
<style scoped>
main {
  background-color: pink;
}
</style> -->
