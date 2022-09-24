<template>
  <div class="data-form">
    <ClosingWarning v-if=exit @closingTheForm="closingTheForm($event, true)"/>
    <div v-else>
      <h3>Редактирование данных</h3>
      <form>
        <label v-for="value in dataInputs"
               :key="value.name">
          <p>{{ value.label }}</p>
          <input :type="value.type"
                 v-model="value.value"
                 class="input"
                 :ref="value.type">
          <IconCalendar v-if="value.type === 'datetime-local'"
                        class="calendar"/>
        </label>
      </form>
      <div class="data-form__btns">
        <VButton @buttonClicked="closingTheForm(true)">Ок</VButton>
        <VButton @buttonClicked="closingTheForm(false)">Отмена</VButton>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import {convertDate} from "@/helpers/convert";
import IconCalendar from '@/components/icons/IconCalendar';
import VButton from '@/components/elements/VButton';
import ClosingWarning from "@/components/ClosingWarning";

export default {
  name: 'DataEditForm',

  components: {IconCalendar, VButton, ClosingWarning},

  props: {
    dataToEdit: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    return {
      dataInputs: [],
      exit: false,
    };
  },
  mounted() {
    const data = JSON.parse(JSON.stringify(this.editValues));
    data.forEach((el) => {
      if (el.type === 'datetime-local') {
        el['value'] = this.convertReceivedDate(this.dataToEdit[el.name])

      } else {
        el['value'] = this.dataToEdit[el.name]
      }
      this.dataInputs.push(el)
    })
  },
  computed: {
    ...mapGetters({
      tableData: 'getTableData',
      editValues: 'getEditValues',
    }),

  },
  methods: {
    ...mapMutations({
      setTableData: 'setTableData',
    }),
    convertReceivedDate(name) {
      return convertDate(name, true);
    },
    closingTheForm(saving, warning) {
      if (warning && saving) {
        this.exit = false;
        this.$emit('hideModal', false);
      } else if (warning && !saving) {
        this.exit = false;
      } else if (!warning && !saving) {
        this.exit = true;
      } else {
        const data = this.dataToEdit
        this.dataInputs.forEach((el) => {
          data[el.name] = el.value
        });
        this.setTableData(data);
        this.$emit('hideModal', false)
      }

    },
  },

}
</script>
<style scoped lang='scss'>
h3 {
  text-align: center;
}

.data-form {
  width: 80rem;
  padding: 1.5rem;

  &__btns {
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    & button:first-child {
      margin-right: 2rem;
    }
  }
}

form {
  padding: 1.5rem;
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  color: #414BB2;

  label {
    position: relative;
  }

  .calendar {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 6px 12px;
  }

}

p {
  background: #414BB2;
  color: #fff;
  padding: 1.5rem;
  font-size: 1.6rem;
}

::-webkit-calendar-picker-indicator {
  color: transparent;
  opacity: 1;
  background: black;
  background-size: contain;
}
</style>
