<template>
  <div id="RightContent">
    <ChartView3 />
    <ChartView4 />
  </div>
</template>

<script>
import ChartView3 from './components/ChartView3'
import ChartView4 from './components/ChartView4'
export default {
  name: 'RightContent',
  components: {
    ChartView3,
    ChartView4
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
#RightContent {
  width: 400px;
  margin-top: 20px;
}
</style>
