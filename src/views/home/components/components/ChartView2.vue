<template>
  <div id="ChartView2">
    <div id="main" ref="main"></div>
    <p class="details" @click="$router.push('/type')">查看详情</p>
  </div>
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
          left: 'center',
          textStyle: {
            color: '#515a6e'
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
    }, 800)
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
#ChartView2 {
  user-select: none;
  width: 400px;
  height: 420px;
  // background: rgba(51, 64, 102, 0.8);
  background: rgba(190, 245, 255, 0.8);
  border-radius: 20px;
  margin-top: 15px;
  padding: 52px 0;
  box-sizing: border-box;
  #main {
    width: 400px;
    height: 300px;
  }
  // 查看详情
  .details {
    color: #515a6e;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 20px;
  }
}
</style>
