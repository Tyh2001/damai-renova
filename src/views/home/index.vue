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
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scoped>
#homeIndex {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("./images/新背景.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow: auto;
}
#content-bigBox {
  width: 1630px;
  margin: 0 auto;
  display: flex;
}
// 响应式
@media (max-width: 1620px) {
  #content-bigBox {
    width: 820px;
    margin: 0 auto;
    position: relative;
    #left-content {
      position: absolute;
      left: 5px;
      top: 875px;
    }
    #right-content {
      position: absolute;
      right: 4px;
      top: 875px;
    }
  }
}
</style>
