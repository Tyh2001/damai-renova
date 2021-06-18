<template>
  <div>
    <div style="width: 1200px; height: 600px" ref="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    setTimeout(() => {
      const myChart = echarts.init(this.$refs.main)
      const option = {}
      myChart.setOption(option)
    }, 800)
  },
  methods: {}
}
</script>

<style lang='less' scoped>
</style>
