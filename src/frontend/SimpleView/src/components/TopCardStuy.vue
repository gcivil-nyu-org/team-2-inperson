<template>
  <div :class="[`card-2`, className || ``]">
    <div class="overlap-group">
      <img class="img-top-card" :src="imgTopCard" alt="img-top-card" />
      <div class="stuyvesant-high-school jost-semi-bold-black-32px">Stuyvesant High School</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCardStuy",
  props: ["imgTopCard", "className"],
};
</script>

<style>
.card-2 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 605px;
  left: 0;
  min-width: 457px;
  position: absolute;
  top: 34px;
}

.overlap-group {
  align-items: flex-start;
  background-color: #513f3f;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  min-height: 605px;
  padding: 19px 18px;
  width: 457px;
}

.img-top-card {
  height: 299px;
  object-fit: cover;
  width: 420px;
}

.stuyvesant-high-school {
  align-self: center;
  letter-spacing: 0;
  margin-right: 1px;
  min-height: 50px;
  text-align: center;
  width: 398px;
}

.card-2.card-2-1 {
  left: 19px;
  top: 16px;
}

.card-2.card-2-1 .overlap-group {
  background-color: #847474;
}

.card-2.top-card-stuy {
  left: 41px;
  top: 0;
}

.card-2.top-card-stuy .overlap-group {
  background-color: #f0ebeb;
}
</style>
