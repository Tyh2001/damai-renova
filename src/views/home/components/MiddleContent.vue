<template>
  <div id="MiddleContent">
    <!-- 主标题 -->
    <h1 class="title">杭州达买 Renova 大数据</h1>

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

    <!-- 商品列表 -->
    <div id="Product-list">
      <el-tag
        color="#7866fc"
        :hit="true"
      >
        商品列表
      </el-tag>

      <!-- 表格数据 -->
      <el-table
        :data="ProductList"
        style="width: 100%"
      >
        <!-- 商品 -->
        <el-table-column
          label="商品"
          width="70"
        >
          <template slot-scope="scope">
            <el-image
              style="width: 60px; height: 60px"
              :src="scope.row.IconIng"
              fit="cover"
            />
          </template>
        </el-table-column>

        <!-- 名称 -->
        <el-table-column
          prop="name"
          label="名称"
        />

        <!-- 价格 -->
        <el-table-column
          prop="Price"
          label="价格"
          width="85"
        />

        <!-- 商品点击率 -->
        <el-table-column
          prop="ClickRate"
          label="商品点击率"
          width="85"
        />

        <!-- 成交订单数 -->
        <el-table-column
          prop="tranOK"
          label="成交订单数"
          width="85"
        />

        <!-- 成交金额 -->
        <el-table-column
          prop="tranAmount"
          label="成交金额"
          width="85"
        />

        <!-- 成交转化率 -->
        <el-table-column
          prop="ConversionRate"
          label="成交转化率"
          width="85"
        />
      </el-table>
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
      ],
      // 表格数据
      ProductList: [
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合黑色组合黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '100.00%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥22228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
        },
        {
          IconIng: 'https://www.hualigs.cn/image/608132a6c15b2.jpg', // 商品
          name: 'Renova 黑色组合', // 名称
          Price: '￥79', // 价格
          ClickRate: '7.24%', // 点击率
          tranOK: '43', // 成交数
          tranAmount: '￥228', // 成交金额
          ConversionRate: '1.55%' // 成交转换率
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
  width: 825px;
  user-select: none;
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
    width: 795px;
    height: 300px;
    margin: auto;
    margin-top: 10px;
    background: rgb(100, 90, 255) url('https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/4eb47b7377a26864bde6e1cd57ede4bf.svg~tplv-n15nrygpm8-image.image');
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
      width: 700px;
      margin: auto;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      .dataTable-item {
        width: 140px;
        height: 70px;
        text-align: center;
        color: #fff;
        .dataTable-item-title {
           color: rgb(181, 189, 251);
        }
      }
    }
  }
  // 商品列表
  #Product-list {
    width: 795px;
    overflow: auto;
    border-radius: 25px;
    background: rgb(51, 64, 102);
    opacity: 0.8;
    margin: auto;
    margin-top: 15px;
    padding: 20px;
    box-sizing: border-box;
    // 标签
    .el-tag {
      color: #fff;
      border: none;
      cursor: default;
      margin-bottom: 10px;
    }
    .el-table {
      height: 340px;
      overflow: auto;
    }
    ::-webkit-scrollbar {
      width: 6px;
      background-color: #ffffff;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #bebebe;
      border-radius: 8px;
    }
    // 表头字体大小
    /deep/ .has-gutter {
      .cell {
        font-size: 12px;
      }
    }
    // 移除表格背景色
    /deep/ .el-table th,
    /deep/ .el-table tr {
      background: rgb(51, 64, 102) !important;
    }
    // 移除表格 hover 背景色
    /deep/ .el-table__row:hover {
      td {
        background: none;
      }
    }
    // 表格字体颜色
    /deep/ .cell {
      color: #fff;
      text-align: center;
    }
  }
}
</style>
