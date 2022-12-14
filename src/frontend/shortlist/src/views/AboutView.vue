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
      <img src="/short-list-logo-light-navbar.png" alt="shortlistlogo" />
    </div>
    <div class="container">
      <p class="contents">
        Shortlist™ is an educational web application specializing in matching
        middle school students and their parents with high schools in NYC.
        Different from the traditional “prune and search” edu app that has
        existed in the past few decades, Shortlist™ shows users around 400 NYC
        public high schools using personalized algorithms and drag-n-drop
        mechanism. It allows users to quickly make a decision to keep or discard
        recommended schools. Each school card contains personalized and relevant
        information. Users can also click on each of the school cards to view
        more in-depth details.
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
        Does this sound fun and familiar? We certainly hope so. We are here to
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
.main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  background: linear-gradient(-65deg, #7bdf8d, #525854);
}
.ShortlistLogo {
  width: 10%;
}
.ShortlistLogo img {
  margin-left: auto;
  margin-right: auto;
  left: 50%;
  width: 190%;
  transform: translate(220%);
}
.contents {
  font-family: "Aleo", sans-serif;
  text-align: justify;
}
.contentslast {
  font-family: "Aleo", sans-serif;
  text-align: justify;
  margin-bottom: 0px;
}
.teamtitle {
  font-family: "Klee One";
  color: rgb(62, 61, 61);
  font-size: 1.5rem;
  margin: 0%;
  text-align: center;
  padding: 0%;
  padding-bottom: 2px;
  font-weight: bold;
}
</style>
