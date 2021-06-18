<template>
  <div>
    <div style="width: 1200px; height: 600px" ref="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { getChannelList } from '@/api/list'
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
        label: {
          show: true, // 是否展示
          position: 'top', // 在顶端
          textStyle: {
            fontSize: '12',
            fontFamily: '微软雅黑'
          }
        },
        title: {
          text: 'Renova 纸巾渠道销量表',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: this.list,
          axisLabel: {
            interval: 0,
            rotate: 30
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '',
            data: this.content,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            // 最大值最小值
            markPoint: {
              data: [
                {
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ]
            },
            // 平均值
            markLine: {
              data: [
                {
                  type: 'average',
                  name: '平均值'
                }
              ]
            }
          }
        ]
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
</style>
