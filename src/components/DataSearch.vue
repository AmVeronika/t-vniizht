<template>
  <div class="block">
    <input type="text"
           :placeholder="placeholder"
           v-model="vModel"
           @input="$emit('update:modelValue', $event.target.value)">
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path
            d="M21.5 21L15.5 15M17.5 10C17.5 13.866 14.366 17 10.5 17C6.63401 17 3.5 13.866 3.5 10C3.5 6.13401 6.63401 3 10.5 3C14.366 3 17.5 6.13401 17.5 10Z"
            stroke="#6A6C74" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "DataSearch",

  props: {
    placeholder: {
      type: String,
      default: 'Введите текст',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      vModel: ''
    };
  },
  mounted() {
    this.vModel = this.value
  },
}
</script>

<style scoped lang="scss">
.block {
  display: flex;
  align-items: center;
  position: relative;

  & svg {
    position: absolute;
    right: 0;
    padding-right: .7rem;
  }
}

</style>
