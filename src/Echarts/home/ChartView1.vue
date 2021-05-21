<template>
  <div id="ChartView1">
    <p class="ChartView-title">图表说明</p>
    <div id="main" ref="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use(
  [TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer]
)
export default {
  name: 'ChartView1',
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
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告'],
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
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        // 修改坐标系字体颜色
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        // 修改坐标系字体颜色
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        }
      ]
    }

    myChart.setOption(option)
  },
  methods: {}
}
</script>

<style lang='less' scoped>
#ChartView1 {
  width: 400px;
  height: 400px;
  background: rgb(51, 64, 102);
  opacity: 0.8;
  border-radius: 20px;
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
