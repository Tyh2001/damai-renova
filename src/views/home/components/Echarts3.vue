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
          link: 'https://www.infinitymcn.com/web/0705_renova_list/front_end/index.html#/series',
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
#main {
  height: 350px;
}
.dv-border-box-10 {
  height: 350px;
}
</style>
