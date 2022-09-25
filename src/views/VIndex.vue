<template>
  <div class="container">
    <WrapperModal v-if="openModal"
                  @hideModal="showModal($event)">
      <div @close="showModal(false)">
        <keep-alive>
          <component :is="layout" :dataToEdit="dataToEdit" @hideModal="showModal($event)"/>
        </keep-alive>
      </div>
    </WrapperModal>
    <DataSearch @update:model-value="search = $event"/>
    <TableV :tableData="table" @openModal="getData"></TableV>
    <PieChart :dataChart="dataChart"/>
  </div>
</template>

<script>
import TableV from '@/components/TableV'
import WrapperModal from '@/components/modal-window/WrapperModal'
import DataEditForm from '@/components/DataEditForm'
import DataSearch from '@/components/DataSearch'
import {showModalWindow} from "@/mixins/showModalWindow";
import {mapGetters} from "vuex";
import {filterData} from "@/helpers/sorting";
import PieChart from "@/components/chart/PieChart";

export default {
  name: "VIndex",
  mixins: [showModalWindow],
  components: {
    TableV,
    WrapperModal,
    DataEditForm,
    DataSearch,
    PieChart,
  },
  data() {
    return {
      dataToEdit: null,
      layout: '',
      search: '',
      dataChart: {
        labels: [],
        data: [],
        title: 'Статистика по stateId',
      }
    };
  },
  mounted() {
    this.table = JSON.parse(JSON.stringify(this.tableData));
    const arrStateId = this.tableData.map(el => el.stateId)
    const countStateId = {}
    for (let elem of arrStateId) {
      if (countStateId[elem] === undefined) {
        countStateId[elem] = 1;
      } else {
        countStateId[elem]++;
      }
    }
    this.dataChart.labels = Object.keys(countStateId);
    this.dataChart.data = Object.values(countStateId);
  },
  computed: {
    ...mapGetters({
      tableData: 'getTableData',
    }),
    table() {
      return filterData(this.tableData, this.search)
    },
  },

  methods: {
    getData(evt) {
      if (evt) {
        this.openModal = true;
        this.dataToEdit = evt;
        this.layout = DataEditForm;
      }
    },
  },
}
</script>

<style scoped>

</style>
