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

export default {
  name: "VIndex",
  mixins: [showModalWindow],
  components: {
    TableV,
    WrapperModal,
    DataEditForm,
    DataSearch,
  },
  data() {
    return {
      dataToEdit: null,
      layout: '',
      search: '',
    };
  },
  mounted() {
    this.table = JSON.parse(JSON.stringify(this.tableData));
    console.log(this.table)
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
