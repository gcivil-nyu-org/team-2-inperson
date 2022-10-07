<template>
  <div class="backup-list">
    <div class="overlap-group5">
      <div class="list-title-2 jost-semi-bold-black-30px">{{ children }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StretchList3",
  props: ["children"],
};
</script>

<style>
.backup-list {
  align-items: flex-start;
  background-color: var(--lynch);
  border: 0px none;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 158px;
  left: 0;
  min-width: 377px;
  position: absolute;
  top: 0;
}

.overlap-group5 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  height: 158px;
  min-width: 377px;
  padding: 18px 23.7px;
}

.list-title-2 {
  letter-spacing: 0;
  min-height: 48px;
  width: 256px;
}
</style>
