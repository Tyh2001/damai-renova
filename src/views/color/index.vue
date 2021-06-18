<template>
  <div id="colorIndex">
    <!-- 颜色销量表 -->
    <Echarts1 />
    <Echarts2 />
  </div>
</template>

<script>
import Echarts1 from './conponents/Echarts1'
import Echarts2 from './conponents/Echarts2'
export default {
  name: 'colorIndex',
  components: {
    Echarts1,
    Echarts2
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scoped>
#colorIndex {
  width: 1200px;
  margin: auto;
}
</style>
