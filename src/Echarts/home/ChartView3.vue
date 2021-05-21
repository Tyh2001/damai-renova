<template>
  <div id="ChartView3">
    <p class="ChartView-title">图表说明</p>
    <div id="main" ref="main"></div>
    <p class="details">查看详情</p>
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]
)
export default {
  name: 'ChartView3',
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
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['数据'],
        // 修改图例的字体颜色
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        // 修改坐标系字体颜色
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: ['浙江', '山西', '山东', '福建', '山西', '贵州'],
        // 修改坐标系字体颜色
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      series: [
        {
          name: '数据',
          type: 'bar',
          data: [231, 313, 454, 123, 35, 422]
        }
      ]
    }

    myChart.setOption(option)
  },
  methods: {}
}
</script>

<style lang='less' scoped>
#ChartView3 {
  user-select: none;
  width: 400px;
  height: 420px;
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
  // 查看详情
  .details {
    color: #fff;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 20px;
  }
}
</style>
