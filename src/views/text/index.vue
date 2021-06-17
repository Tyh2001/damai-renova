<template>
  <div>
    <Echarts1 />
    <Echarts2 />
  </div>
</template>

<script>
import Echarts1 from './conponents/Echarts1.vue'
import Echarts2 from './conponents/Echarts2.vue'
export default {
  name: 'textIndex',
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
</style>
