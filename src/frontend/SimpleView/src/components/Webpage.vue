<template>
  <div class="container-center-horizontal">
    <div class="webpage screen">
      <div class="overlap-group7">
        <img class="short-shortlist-1" :src="shortShortlist1" alt="short-shortlist 1" />
        <div class="navbar">
          <div class="navbar-link jost-normal-black-24px">{{ navbarLinkPlace }}</div>
          <div class="navbar-link jost-normal-black-24px">{{ navbarLinkListView }}</div>
          <div class="navbar-link jost-normal-black-24px">{{ navbarLinkAbout }}</div>
          <div class="navbar-link-logout">{{ navbarLinkLogout }}</div>
        </div>
        <img class="ellipse-1" :src="ellipse1" alt="Ellipse 1" />
      </div>
      <div class="overlap-group-container">
        <div class="overlap-group9"><img class="icon-trash" :src="iconTrash" alt="icon-trash" /></div>
        <div class="card-container">
          <top-card-stuy :imgTopCard="topCardStuy1Props.imgTopCard" />
          <top-card-stuy :imgTopCard="topCardStuy2Props.imgTopCard" :className="topCardStuy2Props.className" />
          <top-card-stuy :imgTopCard="topCardStuy3Props.imgTopCard" :className="topCardStuy3Props.className" />
        </div>
        <div class="overlap-group6">
          <h1 class="title">{{ title }}</h1>
          <stretch-list
            :listTitle="stretchListProps.listTitle"
            :list1="stretchListProps.list1"
            :list2="stretchListProps.list2"
          />
          <stretch-list2 :listTitle="stretchList2Props.listTitle" :list1="stretchList2Props.list1" />
          <div class="overlap-group10">
            <stretch-list3 :children="stretchList3Props.children" />
            <div class="empty">{{ empty }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopCardStuy from "./TopCardStuy";
import StretchList from "./StretchList";
import StretchList2 from "./StretchList2";
import StretchList3 from "./StretchList3";
export default {
  name: "Webpage",
  components: {
    TopCardStuy,
    StretchList,
    StretchList2,
    StretchList3,
  },
  props: [
    "shortShortlist1",
    "navbarLinkPlace",
    "navbarLinkListView",
    "navbarLinkAbout",
    "navbarLinkLogout",
    "ellipse1",
    "iconTrash",
    "title",
    "empty",
    "topCardStuy1Props",
    "topCardStuy2Props",
    "topCardStuy3Props",
    "stretchListProps",
    "stretchList2Props",
    "stretchList3Props",
  ],
};
</script>

<style>
.webpage {
  align-items: flex-end;
  background-color: #d4dfb6;
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 982px;
  overflow: hidden;
  width: 1512px;
}

.overlap-group7 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 133px;
  justify-content: flex-end;
  min-width: 1512px;
  padding: 27px 46px;
}

.short-shortlist-1 {
  height: 60px;
  margin-bottom: 1px;
  object-fit: cover;
  width: 259px;
}

.navbar {
  align-items: flex-start;
  display: flex;
  gap: 27px;
  height: 40px;
  margin-left: 359px;
  margin-top: 11px;
  min-width: 693px;
}

.navbar-link {
  letter-spacing: 0;
  min-height: 40px;
  text-align: center;
  width: 151px;
}

.navbar-link-logout {
  color: #56bb47;
  font-family: var(--font-family-jost);
  font-size: var(--font-size-xs);
  font-weight: 400;
  letter-spacing: 0;
  min-height: 40px;
  text-align: center;
  width: 151px;
}

.ellipse-1 {
  align-self: flex-end;
  height: 77px;
  margin-left: 26px;
  object-fit: cover;
  width: 77px;
}

.overlap-group-container {
  align-items: center;
  display: flex;
  height: 849px;
  margin-right: -1px;
  min-width: 1392px;
}

.overlap-group9 {
  align-items: flex-start;
  border: 2px solid;
  border-color: #b23434;
  border-radius: 10px;
  display: flex;
  height: 120px;
  margin-bottom: 17px;
  min-width: 120px;
  padding: 18px 14px;
}

.icon-trash {
  height: 80px;
  object-fit: cover;
  width: 87px;
}

.card-container {
  height: 639px;
  margin-left: 109px;
  position: relative;
  width: 498px;
}

.overlap-group6 {
  align-items: center;
  background-color: #67819f;
  display: flex;
  flex-direction: column;
  margin-left: 156px;
  min-height: 849px;
  padding: 68px 0;
  position: relative;
  width: 509px;
}

.title {
  color: var(--black);
  font-family: var(--font-family-jost);
  font-size: var(--font-size-l);
  font-weight: 600;
  letter-spacing: 0;
  margin-right: 7px;
  min-height: 44px;
  text-align: center;
  width: 188px;
}

.overlap-group10 {
  height: 158px;
  margin-top: 27px;
  position: relative;
  width: 377px;
}

.empty {
  color: var(--black);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-xs);
  font-style: italic;
  font-weight: 400;
  left: 24px;
  letter-spacing: 0;
  position: absolute;
  top: 78px;
}
</style>
