<template>
  <div id="ChartView2">
    <div id="main" ref="main"></div>
    <p class="details" @click="$router.push('')">查看详情</p>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () { },
  methods: {}
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
