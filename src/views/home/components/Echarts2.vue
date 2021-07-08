<template>
  <dv-border-box-10 id="charts">
    <div id="main" ref="main"></div>
    <p @click="$router.push('/type')">查看详情</p>
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
    const myChart = echarts.init(this.$refs.main)
    setTimeout(() => {
      const option = {
        title: {
          text: 'Renova 纸巾品类销量表',
          subtext: 'Renova 纸巾品类销量饼图',
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
    }, 2000)
  },
  methods: {
    async loadgetTypeList () {
      const { data } = await getTypeList()
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
