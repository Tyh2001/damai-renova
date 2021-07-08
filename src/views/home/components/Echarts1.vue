<template>
  <dv-border-box-10 id="charts">
    <div id="main" ref="main"></div>
    <p @click="$router.push('/color')">查看详情</p>
  </dv-border-box-10>
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
      list: [], // 描述文字
      content: [] // 数据
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadgetColorList()
  },
  mounted () {
    const myChart = echarts.init(this.$refs.main)
    setTimeout(() => {
      const option = {
        title: {
          text: 'Renova 纸巾颜色销量表',
          target: 'self',
          left: 'center',
          subtext: 'Renova 纸巾颜色柱状图',
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: this.list

        },
        series: [
          {
            type: 'bar',
            data: this.content
          }
        ]
      }
      myChart.setOption(option)
    }, 2000)
  },
  methods: {
    async loadgetColorList () {
      const { data } = await getColorList()
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
