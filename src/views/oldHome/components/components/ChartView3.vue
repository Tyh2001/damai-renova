<template>
  <div id="ChartView1">
    <div id="main" ref="main"></div>
    <p class="details" @click="$router.push('/series')">查看详情</p>
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
    setTimeout(() => {
      const myChart = echarts.init(this.$refs.main)
      const option = {
        title: {
          text: 'Renova 纸巾系列销量表',
          subtext: 'Renova 纸巾系列销量表',
          left: 'center',
          textStyle: {
            color: '#515a6e'
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
    }, 800)
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
