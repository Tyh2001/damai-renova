<template>
  <dv-border-box-10>
    <div id="main" ref="main"></div>
  </dv-border-box-10>
</template>

<script>
import { getTypeList } from '@/api/list'
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
    this.loadgetTypeList()
  },
  mounted () {
    setTimeout(() => {
      const myChart = echarts.init(this.$refs.main)
      const option = {
        title: {
          text: 'Renova 纸巾品类销量表',
          subtext: 'Renova 纸巾品类销量饼图',
          link: '/#/type',
          target: 'self',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item'
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
    }, 300)
  },
  methods: {
    async loadgetTypeList () {
      const { data } = await getTypeList()
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
  margin-top: 20px;
  height: 350px;
}
</style>
