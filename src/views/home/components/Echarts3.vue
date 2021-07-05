<template>
  <dv-border-box-10>
    <div id="main" ref="main"></div>
  </dv-border-box-10>
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
    setTimeout(() => {
      const myChart = echarts.init(this.$refs.main)
      const option = {
        title: {
          text: 'Renova 纸巾系列销量表',
          subtext: 'Renova 纸巾系列销量表',
          link: '/#/series',
          target: 'self',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 7,
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
                fontSize: '35',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.content
          }
        ]
      }
      myChart.setOption(option)
    }, 300)
  },
  methods: {
    async loadgetSeriesList () {
      const { data } = await getSeriesList()
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
#main {
  height: 350px;
}
.dv-border-box-10 {
  height: 350px;
}
</style>
