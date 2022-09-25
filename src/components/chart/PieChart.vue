<template>
  <Pie
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
</template>

<script>
import { Pie } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    dataChart: {
      type: Object,
      default: () => {
      }
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {
      }
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  computed: {
    chartOptions(){
      return {
        responsive: true,
        maintainAspectRatio: false,
        hoverOffset: 5,
        plugins: {
          title: {
            display: true,
            text: this.dataChart.title ?  this.dataChart.title : 'Круговой график ',
          }
        }
      }
    },
    chartData() {
      return {
        labels: this.dataChart.labels,
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#003cff','#00D8FF', '#ddc216','#DD1B16',],
            data: this.dataChart.data,
          }
        ]
      }
    },
  },
}
</script>
