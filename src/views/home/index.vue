<template>
  <div id="homeIndex">
    <div id="content-bigBox">

      <!-- 左边内容 -->
      <div id="left-content">
        <LeftContent />
      </div>

      <!-- 中间内容 -->
      <div id="middle-content">
        <MiddleContent />
      </div>

      <!-- 右边内容 -->
      <div id="right-content">
        <RightContent />
      </div>
    </div>
  </div>
</template>

<script>
import LeftContent from './components/LeftContent'
import MiddleContent from './components/MiddleContent'
import RightContent from './components/RightContent'
export default {
  name: 'homeIndex',
  components: {
    LeftContent,
    MiddleContent,
    RightContent
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped>
#content-bigBox {
  width: 1500px;
  margin: 0 auto;
  display: flex;
}
</style>
