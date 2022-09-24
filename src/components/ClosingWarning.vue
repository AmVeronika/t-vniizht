<template>
  <div class="modal">
    <h3>Вы уверены, что хотите выйти?</h3>
    <p>Данные не сохранятся</p>
    <div class="btns">
      <VButton @buttonClicked="closingTheForm(true)">Ок</VButton>
      <VButton @buttonClicked="closingTheForm(false)">Отмена</VButton>
    </div>
  </div>
</template>

<script>


import VButton from "@/components/elements/VButton";

export default {
  name: 'ClosingWarning',

  components: {VButton},

  props: {
    text: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      answer: null,
    };
  },
  mounted() {

  },
  computed: {},
  methods: {
    closingTheForm(saving) {
      this.$emit('closingTheForm', saving);
    },
  },

}
</script>
<style scoped lang='scss'>
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  text-align: center;
}

.btns {
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  & button:first-child {
    margin-right: 2rem;
  }
}
</style>
