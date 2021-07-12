<template>
  <div id="layoutIndex">
    <Tyh-Menu backgroundColor="rgb(5, 15, 66)">
      <h1 class="title" @click="$router.push('/')">
        <img class="logo" src="./images/达买Logo.png" alt="" />
        大数据可视化图表
      </h1>

      <div>
        <Tyh-Menu-Item
          v-for="(list, index) in MenuList"
          :key="index"
          :url="list.url"
          :color="MenuListColor(list.url)"
        >
          <Tyh-icon :icon="list.icon" :color="MenuListColor(list.url)" />
          {{ list.title }}
        </Tyh-Menu-Item>
      </div>
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
    return {
      // 导航栏选项表
      MenuList: [
        { icon: 'tyh-ui-home-01', title: '首页', url: '/' },
        { icon: 'tyh-ui-color-01', title: '颜色表', url: '/color' },
        { icon: 'tyh-ui-channel-01', title: '渠道表', url: '/channel' },
        { icon: 'tyh-ui-series-01', title: '系列表', url: '/series' },
        { icon: 'tyh-ui-type-01', title: '品类表', url: '/type' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    MenuListColor (url) {
      return this.$route.path === url
        ? 'rgb(232,45,67)'
        : '#fff'
    }
  }
}
</script>

<style lang='less' scoped>
#layoutIndex {
  overflow: hidden;
}
.tyh-menu {
  display: block;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  .tyh-menu-item {
    font-weight: 600;
    font-family: "微软雅黑";
  }
  .title {
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 25px;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .logo {
      width: 40px;
      margin-right: 5px;
    }
  }
}
#content {
  padding-top: 120px;
}
</style>
