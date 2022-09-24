<template>
  <button @click="$emit('buttonClicked')"
  :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>


export default {
  name: 'VButton',

  components: {},

  props: {
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      answer: null,
    };
  },
  mounted() {

  },
  computed: {

  },
  methods: {
  },

}
</script>
<style scoped lang='scss'>
button {
  border: 1px solid #414BB2;
  color: #414BB2;
  border-radius: .4rem;
  padding: .5rem;
  transition: all .1s ease;

  &:hover {
    border: 1px solid #414BB2;
    background: #414BB2;
    color: #FFFFFF;
    transition: all .1s ease;
  }
  &:disabled {
    border: 1px solid rgba(28, 116, 25, 0);
    background: rgba(82, 79, 79, 0.6);
    color: #FFFFFF;
    cursor: default;
  }
}
</style>
