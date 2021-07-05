<template>
  <div id="ChartView2">
    <div id="main" ref="main"></div>
    <p class="details" @click="$router.push('/channel')">查看详情</p>
  </div>
</template>

<script>
import { getChannelList } from '@/api/list'
import * as echarts from 'echarts'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      list: [], // 描述文字
      content: [] // 数据
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadgetChannelList()
  },
  mounted () {
    setTimeout(() => {
      const myChart = echarts.init(this.$refs.main)
      const option = {
        title: {
          text: 'Renova 纸巾渠道销量表',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.list,
          axisLabel: {
            interval: 0,
            rotate: 30
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.content,
          type: 'line',
          areaStyle: {}
        }]
      }
      myChart.setOption(option)
    }, 800)
  },
  methods: {
    async loadgetChannelList () {
      const { data } = await getChannelList()

      this.list = data[1]
      this.content = data[0]
    }
  }
}
</script>

<style lang='less' scoped>
#ChartView2 {
  user-select: none;
  width: 400px;
  height: 420px;
  // background: rgba(51, 64, 102, 0.8);
  background: rgba(190, 245, 255, 0.8);
  border-radius: 20px;
  margin-top: 15px;
  padding: 52px 0;
  box-sizing: border-box;
  #main {
    width: 400px;
    height: 300px;
  }
  // 查看详情
  .details {
    color: #515a6e;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 20px;
  }
}
</style>
