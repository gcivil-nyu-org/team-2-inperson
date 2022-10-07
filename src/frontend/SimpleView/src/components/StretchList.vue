<template>
  <div class="stretch-list">
    <div class="overlap-group3">
      <div class="list-title jost-semi-bold-black-30px">{{ listTitle }}</div>
      <div class="list-container">
        <img class="list" :src="list1" alt="list-1" /><img class="list" :src="list2" alt="list-2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StretchList",
  props: ["listTitle", "list1", "list2"],
};
</script>

<style>
.stretch-list {
  align-items: flex-start;
  background-color: var(--lynch);
  border: 0px none;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 158px;
  margin-top: 43px;
  min-width: 377px;
}

.overlap-group3 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-height: 158px;
  padding: 18px 23.7px;
  width: 377px;
}

.list-title {
  letter-spacing: 0;
  margin-left: 0;
  min-height: 48px;
  width: 256px;
}

.list-container {
  align-items: flex-start;
  display: flex;
  gap: 22px;
  min-width: 144px;
}

.list {
  height: 67px;
  object-fit: cover;
  width: 61px;
}
</style>
