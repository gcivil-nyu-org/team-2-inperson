<script>
import axios from "axios";

export default {
  name: "EventListener",
  created() {
    this.emitter.on("submitPreferences", (dta) => {
      console.log(JSON.stringify(dta));
      // prefs = "preferences" : JSON.stringify(dta);
      axios
        .post(
          "https://api.shortlist.nyc/account/update",
          { preferences: dta },
          {
            headers: {
              "x-shortlist-account": "e44278fec4984522b156cae1a8b3981d",
            },
          }
        )
        .then((response) => {
          this.profileData = JSON.parse(JSON.stringify(response.data));
        })
        .catch((err) => {
          console.log("AXIOS ERR:", err.response.data);
        });
    });
  },
};
</script>
