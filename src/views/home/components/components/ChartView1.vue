<template>
  <div id="ChartView1">
    <div id="main" ref="main"></div>
    <p class="details" @click="$router.push('/color')">查看详情</p>
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
    setTimeout(() => {
      const myChart = echarts.init(this.$refs.main)
      const option = {
        title: {
          text: 'Renova 纸巾颜色销量表',
          left: 'center',
          subtext: 'Renova 纸巾颜色柱状图',
          textStyle: {
            color: '#515a6e'
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
    }, 800)
  },
  methods: {
    async loadgetColorList () {
      const { data } = await getColorList()
      this.list = data[1]
      this.content = data[0]
    }
  }
}
</script>

<style lang='less' scoped>
#ChartView1 {
  user-select: none;
  width: 400px;
  height: 420px;
  // background: rgba(51, 64, 102, 0.8);
  background: rgba(190, 245, 255, 0.8);
  border-radius: 20px;
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
    margin-left: 40px;
    font-size: 15px;
  }
}
</style>
