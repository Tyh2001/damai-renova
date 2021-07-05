<template>
  <div id="MiddleContent">
    <!-- 主标题 -->
    <h1 class="title">达买 Renova 大数据</h1>

    <!-- 成交金额大盒子 -->
    <div id="TransactionAmount">
      <p class="Cumulative-title">累计销量</p>

      <!-- 总金额 -->
      <h1 class="total">{{ CumulativeSales }}</h1>

      <!-- 数据表格 -->
      <div id="dataTable">
        <div
          class="dataTable-item"
          v-for="(dataTable, index) in dataTables"
          :key="index"
        >
          <span class="dataTable-item-title">{{ dataTable.title }}</span>
          <h2>{{ dataTable.numbers }}</h2>
        </div>
      </div>
    </div>

    <!-- 商品列表 -->
    <div id="Product-list">
      <Tyh-tag color="primary">商品列表</Tyh-tag>

      <!-- <el-table :data="ProductList" style="width: 100%">
        <el-table-column label="商品" width="70">
          <template slot-scope="scope">
            <el-image
              style="width: 60px; height: 60px"
              :src="scope.row.IconIng"
              fit="cover"
            />
          </template>
        </el-table-column>

        <el-table-column prop="name" label="名称" />

        <el-table-column prop="Price" label="价格" width="120" />

        <el-table-column prop="tranOK" label="成交订单数" width="120" />

        <el-table-column prop="tranAmount" label="成交金额" width="120" />
      </el-table> -->
    </div>
  </div>
</template>

<script>
import { getColorList } from '@/api/list'
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
          numbers: '暂无数据'
        },
        {
          title: '成交人数',
          numbers: '暂无数据'
        },
        {
          title: '成交转化率',
          numbers: '暂无数据'
        },
        {
          title: '千次观看成交金额',
          numbers: '暂无数据'
        },
        {
          title: '成交粉丝占比',
          numbers: '暂无数据'
        },
        {
          title: '平均在线人数',
          numbers: '暂无数据'
        },
        {
          title: '累计观看人数',
          numbers: '暂无数据'
        },
        {
          title: '新加粉丝团数',
          numbers: '暂无数据'
        },
        {
          title: '新增粉丝数',
          numbers: '暂无数据'
        },
        {
          title: '人均观看时长',
          numbers: '暂无数据'
        }
      ],
      // 表格数据
      ProductList: [],
      // 累计销量
      CumulativeSales: 0
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
      data[0].forEach(item => {
        allNum += item
      })
      this.CumulativeSales = allNum
    }
  }
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
  // 成交金额大盒子
  #TransactionAmount {
    width: 795px;
    height: 300px;
    margin: auto;
    margin-top: 10px;
    background: rgb(190, 245, 255)
      url("https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/4eb47b7377a26864bde6e1cd57ede4bf.svg~tplv-n15nrygpm8-image.image");
    border-radius: 25px;
    // 累计成交金额
    .Cumulative-title {
      text-align: center;
      color: #515a6e;
      font-size: 18px;
      // font-weight: 700;
      line-height: 60px;
    }
    // 总额
    .total {
      text-align: center;
      color: #515a6e;
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
        color: #36383f;
        .dataTable-item-title {
          color: rgb(61, 74, 167);
        }
      }
    }
  }
  // 商品列表
  #Product-list {
    width: 795px;
    height: 460px;
    overflow: auto;
    border-radius: 25px;
    // background: rgba(51, 64, 102, 0.8);
    background: rgba(190, 245, 255, 0.8);
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
      background: none !important;
    }
    // 移除表格 hover 背景色
    /deep/ .el-table__row:hover {
      td {
        background: none;
      }
    }
    // 表格字体颜色
    /deep/ .cell {
      // color: #fff;
      text-align: center;
    }
  }
}
</style>
