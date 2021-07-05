<template>
  <div id="LeftContent">
    <ChartView1 />
    <ChartView2 />
  </div>
</template>

<script>
import ChartView1 from './components/ChartView1'
import ChartView2 from './components/ChartView2'
export default {
  name: 'LeftContent',
  components: {
    ChartView1,
    ChartView2
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
#LeftContent {
  width: 400px;
  margin-top: 20px;
}
</style>
