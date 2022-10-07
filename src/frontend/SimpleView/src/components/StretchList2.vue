<template>
  <div class="probable-list">
    <div class="list-container-1">
      <div class="list-title-1 jost-semi-bold-black-30px">{{ listTitle }}</div>
      <img class="list-1" :src="list1" alt="list-1" />
    </div>
  </div>
</template>

<script>
export default {
  name: "StretchList2",
  props: ["listTitle", "list1"],
};
</script>

<style>
.probable-list {
  align-items: flex-start;
  background-color: var(--lynch);
  border: 0px none;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 158px;
  margin-top: 27px;
  min-width: 377px;
}

.list-container-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-height: 158px;
  padding: 18px 23.7px;
  width: 377px;
}

.list-title-1 {
  letter-spacing: 0;
  margin-left: 0;
  min-height: 48px;
  width: 256px;
}

.list-1 {
  height: 67px;
  object-fit: cover;
  width: 61px;
}
</style>
