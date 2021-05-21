<template>
  <div id="ChartView2">
    <p class="ChartView-title">图表说明</p>
    <div id="main" ref="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use(
  [TooltipComponent, LegendComponent, PieChart, CanvasRenderer]
)
export default {
  name: 'ChartView2',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    const myChart = echarts.init(this.$refs.main)
    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        // 修改图例的字体颜色
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        top: 160
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 6,
            borderColor: '#fff',
            borderWidth: 1
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ]
        }
      ]
    }

    myChart.setOption(option)
  },
  methods: {}
}
</script>

<style lang='less' scoped>
#ChartView2 {
  width: 400px;
  height: 400px;
  background: rgb(51, 64, 102);
  opacity: 0.8;
  border-radius: 20px;
  margin-top: 15px;
  // 图表说明
  .ChartView-title {
    padding: 20px 0 20px 20px;
    color: rgb(246, 244, 229);
    font-weight: 700;
  }
  #main {
    width: 400px;
    height: 300px;
  }
}
</style>
