<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        选择产品2：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        开始日期：
        <v2-datepicker v-model="startDate"></v2-datepicker>
      </div>
      <div class="order-list-option">
        结束日期：
        <v2-datepicker v-model="endDate"></v2-datepicker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="(head, index) in tableHeads" :key="index" @click="changeOrderType(head)" :class="{active:head.active}">{{ head.label }}</th>
        </tr>
        <tr v-for="item in tableData" :key="item.period">
          <td v-for="(head, index) in tableHeads" :key="index">{{ item[head.key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'v2-datepicker/lib/index.css'
import V2Datepicker from 'v2-datepicker'
import _ from 'lodash'
import VSelection from '../components/base/selection'

Vue.use(V2Datepicker)

export default {
  components: {
    VSelection
  },
  data () {
    return {
      query: '',
      productId: 0,
      startDate: '',
      endDate: '',
      products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      currentOrder: 'asc',
      tableData: [
        {
          'orderId': 'ddj123',
          'product': '数据统计',
          'version': '高级版',
          'period': '1年',
          'buyNum': 2,
          'date': '2016-10-10',
          'amount': '500元'
        },
        {
          'orderId': 'yuj583',
          'product': '流量分析',
          'version': '户外版',
          'period': '3个月',
          'buyNum': 1,
          'date': '2016-5-2',
          'amount': '2200元'
        },
        {
          'orderId': 'pmd201',
          'product': '广告发布',
          'version': '商铺版',
          'period': '3年',
          'buyNum': 12,
          'date': '2016-8-3',
          'amount': '7890元'
        }
      ]
    }
  },
  watch: {
    query () {
      // this.getList()
    },
    startDate () {
      // this.getList()
    },
    endDate () {
      // this.getList()
    }
  },
  methods: {
    productChange (obj) {
      this.productId = obj.value
      // this.getList()
    },
    getList () {
      let reqParams = {
        query: this.query,
        productId: this.productId,
        startDate: this.startDate,
        endDate: this.endDate
      }
      console.log(reqParams)
      /*
      this.$http.post('/api/getOrderList', reqParams)
        .then((res) => {
          this.tableData = res.data.list
        }, (err) => {

        })
      */
    },
    changeOrderType (headItem) {
      this.tableHeads.map((item) => {
        item.active = false
        return item
      })
      headItem.active = true
      if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      } else if (this.currentOrder === 'desc') {
        this.currentOrder = 'asc'
      }
      this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
    }
  },
  mounted () {
    // this.getList()
  }
}
</script>

<style lang="scss" scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .order-list-option {
    display: inline-block;
    padding-left: 15px;
    &:first-child {
      padding-left: 0;
    }
    .order-query {
      height: 25px;
      line-height: 25px;
      border: 1px solid #e3e3e3;
      outline: none;
      text-indent: 10px;
    }
  }
  .order-list-table {
    margin-top: 20px;
    table {
      width: 100%;
      background: #fff;
      td,
      th {
        border: 1px solid #e3e3e3;
        text-align: center;
        padding: 10px 0;
      }
      th {
        background: #4fc08d;
        color: #fff;
        border: 1px solid #4fc08d;
        cursor: pointer;
        &.active {
          background: #35495e;
        }
      }
    }
  }
}
</style>
