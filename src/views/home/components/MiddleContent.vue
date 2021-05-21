<template>
  <div id="MiddleContent">
    <!-- 主标题 -->
    <h1 class="title">Renova 抖音直播大数据可视化图表</h1>

    <!-- 标题下方说明 -->
    <div class="title-explain">
      <img
        class="renova-photo"
        src="../images/renova 头像.jpg"
        alt="renova 头像"
      />
      <span class="renove-name">Renova旗舰店</span>
    </div>

    <!-- 成交金额大盒子 -->
    <div id="TransactionAmount">
      <p class="Cumulative-title">直播间累计成交金额(元)</p>

      <!-- 总金额 -->
      <h1 class="total">30375</h1>

      <!-- 数据表格 -->
      <div id="dataTable">
        <div
          class="dataTable-item"
          v-for="(dataTable, index) in dataTables"
          :key="index"
        >
          <span class="dataTable-item-title">{{dataTable.title}}</span>
          <h2>{{dataTable.numbers}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiddleContent',
  components: {},
  props: {},
  data () {
    return {
      // 成交金额数据表格
      dataTables: [
        {
          title: '成交件数',
          numbers: '622'
        },
        {
          title: '成交人数',
          numbers: '265'
        },
        {
          title: '成交转化率',
          numbers: '13.02%'
        },
        {
          title: '千次观看成交金额',
          numbers: '1198.51'
        },
        {
          title: '成交粉丝占比',
          numbers: '23.02%'
        },
        {
          title: '平均在线人数',
          numbers: '51'
        },
        {
          title: '累计观看人数',
          numbers: '2.06万'
        },
        {
          title: '新加粉丝团数',
          numbers: '45'
        },
        {
          title: '新增粉丝数',
          numbers: '498'
        },
        {
          title: '人均观看时长',
          numbers: '49秒'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped>
#MiddleContent {
  width: 700px;
  height: 200px;
  // 标题
  .title {
    text-align: center;
    color: #fff;
    line-height: 90px;
  }
  // 标题下说明
  .title-explain {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    // 头像
    .renova-photo {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid #fff;
      margin-left: 30px;
    }
    // 名称
    .renove-name {
      color: #fff;
      margin-left: 10px;
    }
  }
  // 成交金额大盒子
  #TransactionAmount {
    width: 670px;
    height: 300px;
    margin: auto;
    margin-top: 10px;
    background: rgb(100, 90, 255);
    border-radius: 25px;
    // 累计成交金额
    .Cumulative-title {
      text-align: center;
      color: #fff;
      font-size: 18px;
      // font-weight: 700;
      line-height: 60px;
    }
    // 总额
    .total {
      text-align: center;
      color: #fff;
      font-size: 60px;
    }
    // 数据展示表格
    #dataTable {
      width: 100%;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      .dataTable-item {
        width: 130px;
        height: 70px;
        text-align: center;
        color: #fff;
        .dataTable-item-title {
           color: rgb(181, 189, 251);
        }
      }
    }
  }
}
</style>
