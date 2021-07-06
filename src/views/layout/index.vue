<template>
  <div>
    <Tyh-Menu backgroundColor="rgb(5, 15, 66)">
      <div>
        <Tyh-Menu-Item url="/">
          <!-- <Tyh-icon icon="tyh-ui-home-01" color="#fff" /> -->
          首页
        </Tyh-Menu-Item>
        <Tyh-Menu-Item url="/color">
          <!-- <Tyh-icon icon="tyh-ui-color-01" color="#fff" /> -->
          颜色表
        </Tyh-Menu-Item>
        <Tyh-Menu-Item url="/channel">
          <!-- <Tyh-icon icon="tyh-ui-channel-01" color="#fff" /> -->
          渠道表
        </Tyh-Menu-Item>
        <Tyh-Menu-Item url="/series">
          <!-- <Tyh-icon icon="tyh-ui-series-01" color="#fff" /> -->
          系列表
        </Tyh-Menu-Item>
        <Tyh-Menu-Item url="/type">
          <!-- <Tyh-icon icon="tyh-ui-type-01" color="#fff" /> -->
          品类表
        </Tyh-Menu-Item>
      </div>

      <h1 class="title">大数据可视化图表</h1>
    </Tyh-Menu>

    <div id="content">
      <router-view />
    </div>
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
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less' scoped>
.tyh-menu {
  display: block;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  .title {
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 25px;
    margin-right: 40px;
  }
}
#content {
  margin-top: 80px;
}
</style>
