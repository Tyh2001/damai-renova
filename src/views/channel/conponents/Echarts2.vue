<template>
  <div>
    <div style="width: 1200px; height: 600px" ref="main"></div>
  </div>
</template>

<script>
import { getChannelList } from '@/api/list'
import * as echarts from 'echarts'
export default {
  data () {
    return {
      content: [] // 数据
    }
  },
  created () {
    this.loadgetChannelList()
  },
  mounted () {
    const myChart = echarts.init(this.$refs.main)
    setTimeout(() => {
      const option = {
        title: {
          text: 'Renova 纸巾渠道销量表',
          subtext: '全部销量表',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: this.content,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: '#000'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    }, 1000)
  },
  methods: {
    async loadgetChannelList () {
      const { data } = await getChannelList()
      data.forEach(item => {
        const obj = {}
        obj.value = item.num
        obj.name = item.list
        this.content.push(obj)
      })
    }
  }
}
</script>

<style lang='less' scoped>
</style>
