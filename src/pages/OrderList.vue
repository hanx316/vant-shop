<template>
  <div>
    <header-nav title="我的订单" />
    <van-list v-model="loading" :finished="finished" @load="onLoad" class="order-list">
      <van-panel class="order-panel" v-for="order in orders" :key="order.id" :title="`订单编号:${order.order_sn}`" :status="order.order_status_name">
        <div class="order-content">
          <div class="order-product">
            <span>{{ order.product.product_name }}</span>
            <span>数量: {{ order.goods_number }}</span>
          </div>
          <div class="order-user">下单时间: {{ order.add_time }}</div>
          <div class="order-user">收货人: {{ order.consignee }}</div>
          <div class="order-user">收货地址: {{ order.address }}</div>
          <div class="order-user">收货电话: {{ order.mobile }}</div>
          <div class="order-user">快递单号: {{ order.shipping_sn }}</div>
          <div class="order-price">订单价格: {{ order.order_price }}</div>
        </div>
      </van-panel>
    </van-list>
  </div>
</template>

<script>
import { Panel, List } from 'vant'
import HeaderNav from '@/components/HeaderNav'
import api from '@/api'
const { user } = api

export default {
  components: {
    HeaderNav,
    [Panel.name]: Panel,
    [List.name]: List
  },

  data() {
    return {
      orders: [],
      loading: false,
      finished: false,
      currentPage: 0,
      pageCount: 0
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('hide-footer')
      vm.id = vm.$route.params.id
    })
  },

  beforeRouteLeave(to, from, next) {
    const footerActiveIndex = to.path === '/home' ? 0 : 3
    this.$bus.$emit('show-footer', footerActiveIndex)
    next()
  },

  methods: {
    onLoad() {
      user.getOrderList({
        page: this.currentPage + 1,
        pageSize: 10
      }).then(res => {
        if (res.code !== 0) return
        this.pageCount = res.pager.pageCount
        this.orders.push(...res.items)
        if (this.currentPage >= this.pageCount) {
          this.finished = true
        }
        this.loading = false
        this.currentPage += 1
      })
    }
  }
}
</script>

<style>
/* .order-list {
  margin-bottom: 50px;
} */
.order-panel {
  box-shadow: 3px 3px 3px #ccc;
  margin-bottom: 10px;
}
.order-content {
  padding: 15px;
  font-size: 16px;
}
.order-product {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.order-user {
  margin-bottom: 5px;
}
.order-price {
  text-align: right;
}
</style>
