<template>
  <div id="typeIndex">
    <!-- 品类销量表 -->
    <Echarts1 />
    <Echarts2 />
  </div>
</template>

<script>
import Echarts1 from './conponents/Echarts1'
import Echarts2 from './conponents/Echarts2'
export default {
  name: 'typeIndex',
  components: {
    Echarts1,
    Echarts2
  }
}
</script>

<style lang='less' scoped>
#typeIndex {
  width: 1200px;
  margin: auto;
}
</style>
