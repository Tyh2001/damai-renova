<template>
  <div>
    <div style="height: 600px" ref="main"></div>
  </div>
</template>

<script>
import { getColorList } from '@/api/list'
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
    this.loadgetColorList()
  },
  mounted () {
    setTimeout(() => {
      const myChart = echarts.init(this.$refs.main)
      const option = {
        title: {
          text: 'Renova 纸巾颜色销量表',
          subtext: '',
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
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    }, 30000)
  },
  methods: {
    async loadgetColorList () {
      const { data } = await getColorList()
      const list = data[1]
      const content = data[0]

      const newArr = []
      for (let i = 0; i < list.length; i++) {
        const newObj = {}
        newObj.value = content[i]
        newObj.name = list[i]
        newArr.push(newObj)

        this.content = newArr
      }
    }
  }
}
</script>

<style lang='less' scoped>
</style>
