<template>
  <div class="stats__test">
    <div style="width: 100%">
      <table class="test__table">
        <thead>
        <tr>
          <th v-for="title in titleTable" :key="'item'+title">
            <p>{{ stringConversion(title.label) }}</p>
            <div class="array">
              <span class="array__btn" @click="sorting(tbody, title.name, true)">&#129085;</span>
              <span class="array__btn" @click="sorting(tbody, title.name, false)">&#129087;</span>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="line in tbody"
            :key="'id'+line.id"
            @click="$emit('openModal', line)">
          <td v-for="(td, index) in titleTable" :key="index"
              :title="td.name === 'lastOperDt' ? convertReceivedDate(line[td.name]) : line[td.name]">
          <span v-if="td.name === 'lastOperDt'">
            {{ !line[td.name] ? '&#8211;' : convertReceivedDate(line[td.name]) }}
          </span>
            <span v-else>{{ line[td.name] }}</span>
          </td>
        </tr>
        </tbody>
      </table>
      <div v-if="!tbody"> No data found</div></div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {toUpperCaseFirstLetter} from '@/helpers/stringConversion';
import {sortingTheTable} from '@/helpers/sorting';
import {convertDate} from '@/helpers/convert';

export default {
  name: 'TableV',
  data() {
    return {
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {

  },
  computed: {
    ...mapGetters({
      titleTable: 'getTitleTable',
    }),
    tbody() {
      return JSON.parse(JSON.stringify(this.tableData));
    }
  },
  methods: {
    stringConversion(item) {
      return toUpperCaseFirstLetter(item);
    },
    async sorting(array, name, graduation) {
      await sortingTheTable(array, name, graduation);
    },
    convertReceivedDate(name) {
      return convertDate(name);
    },
  },
}
</script>
<style scoped lang='scss'>
thead {
  height: 6rem;
}

.stats__test {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  &-btn {
    cursor: pointer;

    &-disabled {
      background: var(--main-light-color) !important;
    }
  }

  @media (max-width: 1000px) {
    overflow-x: auto;
  }
  //@media (min-width: 4700px) {
  //  height: 62%;
  //}
  //@media (min-width: 4683px) {
  //  height: 64%;
  //}
  //@media (min-width: 4240px) {
  //  height: 66%;
  //}
  .tab {
    span {
      font-size: 2rem;
    }
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 1.125rem;
      line-height: 1.75rem;
      overflow-wrap: break-word;
      color: var(--black-color);
    }
  }

  .test__table {
    border-right-color: #ffffff;
    font-size: 1.4rem;
    width: 100%;
    table-layout: fixed;
    @media (max-width: 1000px) {
      width: 140rem;
    }

    th,
    td {
      padding: .7rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
    }


    th {
      background-color: #414BB2;
      color: #fff;
      width: 25%;
      font-size: 1.5rem;
      position: relative;

      .array {
        display: flex;
        flex-direction: column;
        gap: .8rem;
        position: absolute;
        top: 50%;
        right: .5rem;
        transform: translateY(-50%);
        line-height: 0.4rem;
        cursor: pointer;

        &__btn {
          opacity: 0.3;

          &:hover {
            opacity: 1;
          }
        }
      }

      & p {
        margin-right: 15px;
      }
    }

    tbody tr {
      transition: all .1s ease;
    }

    tbody tr:nth-child(odd) {
      background-color: #f8f9fa;
    }

    tbody tr:nth-child(even) {
      background-color: #e9ecef;
    }

    tbody tr:hover {
      background-color: #414BB2;
      cursor: pointer;
      transition: all .1s ease;
    }

    tbody tr:active {
      td {
        color: #e9ecef;
      }
    }
  }

  table {
    border-collapse: inherit;
  }
}
</style>
