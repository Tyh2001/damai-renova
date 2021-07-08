<template>
  <div id="newHomeIndex">
    <!-- 内容部分 -->
    <div id="content">
      <!-- 左边 -->
      <div id="content-left">
        <Echarts1 />
        <Echarts2 />
      </div>

      <!-- 中间 -->
      <div id="content-center">
        <dv-border-box-11 title="累计销量">
          <h1 class="sales">{{ CumulativeSales }}</h1>
        </dv-border-box-11>
      </div>

      <!-- 右边 -->
      <div id="content-right">
        <Echarts3 />
        <Echarts4 />
      </div>
    </div>
  </div>
</template>
<script>
import Echarts1 from './components/Echarts1'
import Echarts2 from './components/Echarts2'
import Echarts3 from './components/Echarts3'
import Echarts4 from './components/Echarts4'
import { getColorList } from '@/api/list'
export default {
  name: 'homeIndex',
  components: {
    Echarts1,
    Echarts2,
    Echarts3,
    Echarts4
  },
  props: {},
  data () {
    return {
      CumulativeSales: 0 // 销售总数
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadgetColorList()
  },
  mounted () { },
  methods: {
    async loadgetColorList () {
      const { data } = await getColorList()

      let allNum = 0
      data.forEach(item => {
        allNum += item.num
      })
      this.CumulativeSales = allNum
    }
  }
}
</script>

<style lang='less' scoped>
#newHomeIndex {
  // height: 100vh;
  background-image: radial-gradient(rgb(19, 65, 182), rgb(35, 48, 80));
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  #content {
    width: 1600px;
    margin: auto;
    display: flex;
    #content-left,
    #content-right {
      width: 500px;
      height: 750px;
      padding: 15px;
      box-sizing: border-box;
    }
    #content-center {
      width: 600px;
      padding: 15px;
      box-sizing: border-box;
      height: 750px;
      .dv-border-box-11 {
        width: 100%;
        height: 130px;
        user-select: none;
        .sales {
          color: #fff;
          text-align: center;
          line-height: 170px;
          font-size: 39px;
        }
      }
    }
  }
}
@media screen and (max-width: 1600px) {
  #content {
    width: 990px !important;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    //中间部分
    #content-center {
      width: 100% !important;
      padding: 15px;
      box-sizing: border-box;
      height: 750px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
      .dv-border-box-11 {
        height: 130px;
        user-select: none;
        .sales {
          color: #fff;
          text-align: center;
          line-height: 170px;
          font-size: 39px;
        }
      }
    }
    #content-right {
      width: 100%;
      height: 750px;
      padding: 15px;
      box-sizing: border-box;
      position: absolute;
      top: 770px;
      right: 0;
    }
    #content-left {
      width: 100%;
      height: 750px;
      padding: 15px;
      box-sizing: border-box;
      position: absolute;
      top: 1540px;
      top: 770px;
      left: 0;
    }
  }
}
</style>
