<script>
import DeveloperCard from "../components/layout/about/DeveloperCard.vue";
export default {
  components: {
    DeveloperCard,
  },
};
</script>

<template>
  <main>
    <div class="ShortlistLogo">
      <img src="/short-list-logo-light-navbar.png" />
    </div>
    <div class="container">
      <p class="contents">
        Shortlist™ is an education web application specializes in matching
        middle school students or their parents with their desired high schools
        in NYC. Different from the traditional “prune and search” edu app that
        has been existed in the past few decades, Shortlist™ feeds users around
        400 NYC public high schools using personalized algorithms and
        drag-n-drop mechanism. It allows users to quickly make decision to keep
        or discard recommended schools. Each school card contains personalized
        and relevant information. Users can also click on each of the school
        cards to view more in-depth information.
      </p>
      <p class="contents">
        Each list can contain up to four different schools and users can
        personalize the lists’ name, style, and priority. Once users are
        satisfied with their selections in a list, they can share such a list to
        their friends and families so that they can discuss which schools are
        the best options for their high school experience. What could be more
        exciting than talking about which high school to go together with your
        besties in a few months?
      </p>
      <p class="contentslast">
        Does this sound fun and familiar? We certainly hope so We are here to
        help hone your intuition and lead you to your destiny for the next four
        (best) years 💚.
      </p>
    </div>
    <div>
      <h1 class="teamtitle">- - Team Shortlist - -</h1>
    </div>
    <DeveloperCard
      style="
        background: linear-gradient(-65deg, #7bdf8d, #525854);
        padding: 13px;
      "
    ></DeveloperCard>
  </main>
</template>

<style>
.container {
  margin-left: 40%;
}
.content-container {
  margin: 2% 2% 2% 2%;
}
.bigtitle {
  font-size: 50px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}
.contents {
  font-size: 25px;
  font-weight: 200;
  color: #008037;
  font-family: "Cabin Sketch", cursive;
}
</style>
