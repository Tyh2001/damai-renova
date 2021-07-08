<template>
  <div>
    <div style="height: 600px" ref="main"></div>
  </div>
</template>

<script>
import { getSeriesList } from '@/api/list'
import * as echarts from 'echarts'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      content: [] // 数据
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadgetSeriesList()
  },
  mounted () {
    const myChart = echarts.init(this.$refs.main)
    setTimeout(() => {
      const option = {
        title: {
          text: 'Renova 纸巾系列销量表',
          subtext: '全部销量表',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          color: 'red'
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
    async loadgetSeriesList () {
      const { data } = await getSeriesList()
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
