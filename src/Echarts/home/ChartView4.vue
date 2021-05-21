<template>
  <div id="ChartView4">
    <p class="ChartView-title">图表说明</p>
    <div id="main" ref="main"></div>
    <p class="details">查看详情</p>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ChartView4',
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
      legend: {
        data: ['数据1', '数据2', '数据3'],
        // 修改图例的字体颜色
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      series: [
        {
          name: '数据1',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        },
        {
          name: '数据2',
          data: [220, 182, 191, 234, 290, 330, 310],
          type: 'line',
          smooth: true
        }
      ]
    }

    myChart.setOption(option)
  },
  methods: {}
}
</script>

<style lang='less' scoped>
#ChartView4 {
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
