<template>
  <div>
    <header-nav title="夺宝记录" />
    <van-list v-model="loading" :finished="finished" @load="onLoad" class="order-list">
      <van-panel class="order-panel" v-for="order in orders" :key="order.id" :title="`订单编号:${order.order_sn}`" :status="order.order_status_name">
        <div class="order-content">
          <div class="order-product">
            <span>{{ order.productPrize.product.product_name }}</span>
            <span>数量: {{ order.join_number }}</span>
          </div>
          <div class="order-user">投注时间: {{ order.add_time }}</div>
          <div class="order-user">开奖状态: {{ order.prized_name }}</div>
          <div class="order-price">订单价格: {{ order.join_price }}</div>
        </div>
        <div class="pay-btn-box" v-if="order.order_status === 1 && order.productPrize.finish !== 1" slot="footer">
          <van-button size="small" type="danger" @click="goPay(order)">支付</van-button>
        </div>
      </van-panel>
    </van-list>
  </div>
</template>

<script>
import { Panel, List, Button } from 'vant'
import HeaderNav from '@/components/HeaderNav'
import api from '@/api'
const { user } = api

export default {
  components: {
    HeaderNav,
    [Panel.name]: Panel,
    [List.name]: List,
    [Button.name]: Button
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
      user.getPrizeList({
        page: this.currentPage + 1,
        pageSize: 10
      }).then(res => {
        if (res.code !== 0) return
        this.pageCount = res.pager.pageCount
        this.orders.push(...res.items)
        if (++this.currentPage >= this.pageCount) {
          this.finished = true
        }
        this.loading = false
      })
    },
    goPay(order) {
      this.$router.push({
        path: '/pay-treasure',
        query: {
          sn: order.order_sn,
          price: order.join_price,
          number: order.join_number
        }
      })
    }
  }
}
</script>


<style>
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
.pay-btn-box {
  text-align: right;
  font-size: 16px;
}
</style>
