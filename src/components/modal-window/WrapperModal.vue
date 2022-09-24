<template>
  <div class="wrapp-modal" @mousedown.self="showModal">
    <div class="wrapp-modal__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WrapperModal',
  methods: {
    showModal() {
      this.$emit('hideModal', false);
    },
  },
};
</script>

<style lang='scss'>
.wrapp-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.2);
  &__container {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    padding: .7rem;
    border-radius: .4rem;
    background: #fff;
  }
}

@keyframes ani {
  0% {
    transform: translateY(-8%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
