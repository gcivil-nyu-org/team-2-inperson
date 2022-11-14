<script>
export default {
  props: ["visible"],
  emits: ["modalOff"],
  methods: {
    logClick(e) {
      console.log(e);
    },
  },
};
</script>
<template>
  <template v-if="visible">
    <div class="shortlist-modal" @click="$emit('modalOff')">
      <div class="shortlist-modal-inner">
        <div
        id = "modalOffTest"
          @click="
            (e) => {
              e.stopPropagation();
            }
          "
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
</template>
<style scoped>
.shortlist-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(176, 176, 176, 0.85);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  z-index: 500000;
  overscroll-behavior: none;
}
.shortlist-modal-inner {
  background-color: rgba(255, 255, 255, 0.65);
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 100px;
  box-shadow: 0 0 50px 50px rgba(255, 255, 255, 0.65);
  border-radius: 5%;
}
</style>
