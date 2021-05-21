<template>
  <div>
   <div ref="main" style="width: 400px;height:400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
    DatasetComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components'
import {
    LineChart
} from 'echarts/charts'
import {
    CanvasRenderer
} from 'echarts/renderers'

echarts.use(
    [DatasetComponent, TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
)
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    $.get(ROOT_PATH + '/data/asset/data/life-expectancy-table.json', function (_rawData) {
    run(_rawData);
});

function run(_rawData) {

    option = {
        dataset: [{
            id: 'dataset_raw',
            source: _rawData
        }, {
            id: 'dataset_since_1950_of_germany',
            fromDatasetId: 'dataset_raw',
            transform: {
                type: 'filter',
                config: {
                    and: [
                        { dimension: 'Year', gte: 1950 },
                        { dimension: 'Country', '=': 'Germany' }
                    ]
                }
            }
        }, {
            id: 'dataset_since_1950_of_france',
            fromDatasetId: 'dataset_raw',
            transform: {
                type: 'filter',
                config: {
                    and: [
                        { dimension: 'Year', gte: 1950 },
                        { dimension: 'Country', '=': 'France' }
                    ]
                }
            }
        }],
        title: {
            text: 'Income of Germany and France since 1950'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            nameLocation: 'middle'
        },
        yAxis: {
            name: 'Income'
        },
        series: [{
            type: 'line',
            datasetId: 'dataset_since_1950_of_germany',
            showSymbol: false,
            encode: {
                x: 'Year',
                y: 'Income',
                itemName: 'Year',
                tooltip: ['Income'],
            }
        }, {
            type: 'line',
            datasetId: 'dataset_since_1950_of_france',
            showSymbol: false,
            encode: {
                x: 'Year',
                y: 'Income',
                itemName: 'Year',
                tooltip: ['Income'],
            }
        }]
    };

    myChart.setOption(option);

}

option && myChart.setOption(option);
  },
  methods: {}
}
</script>

<style lang='less' scoped>
</style>
