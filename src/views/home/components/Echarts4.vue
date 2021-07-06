<template>
  <dv-border-box-10 id="charts">
    <div id="main" ref="main"></div>
    <p @click="$router.push('/channel')">查看详情</p>
  </dv-border-box-10>
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
          subtext: 'Renova 纸巾渠道销量表',
          target: 'self',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
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
    }, 2000)
  },
  methods: {
    async loadgetChannelList () {
      const { data } = await getChannelList()
      data.forEach(item => {
        this.list.push(item.list)
        this.content.push(item.num)
      })
    }
  }
}
</script>

<style lang='less' scoped>
#main {
  height: 350px;
}
.dv-border-box-10 {
  margin-top: 20px;
  height: 350px;
}
#charts {
  position: relative;
  p {
    color: #fff;
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
  }
}
</style>
