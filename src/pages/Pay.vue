<template>
  <div class="payment-page">
    <header-nav title="支付说明" />
    <div class="pay-flow">
      <div class="pay-row">支付流程：</div>
      <div class="pay-row">1. 请确认已经安装支付宝</div>
      <div class="pay-row">2. 向本公司支付宝账号转账订单金额</div>
      <div class="pay-row">3. 付款备注说明请填写订单编号</div>
      <div class="pay-row">4. 付款成功后，<span class="pay-em">耐心等待10分钟</span></div>
      <div class="pay-row">特别提示：</div>
      <div class="pay-em">请正确按照订单信息填写，否则无法自动到账</div>
      <div class="order-info">
        <div class="pay-row">订单信息：</div>
        <div class="pay-row">订单编码： {{ sn }}</div>
        <div class="pay-row">商品数量： {{ number }}</div>
        <div class="pay-row">订单价格： {{ price }}</div>
      </div>
    </div>
    <van-button size="large" type="danger" @click="goPay" class="pay-btn">前往支付宝支付</van-button>
  </div>  
</template>

<script>
import { Button } from 'vant'
import HeaderNav from '@/components/HeaderNav'

export default {
  components: {
    HeaderNav,
    [Button.name]: Button
  },

  props: ['sn', 'price', 'number'],

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('hide-footer')
      vm.id = vm.$route.params.id
    })
  },

  beforeRouteLeave(to, from, next) {
    if (to.path === '/home') {
      const footerActiveIndex = 0
      this.$bus.$emit('show-footer', footerActiveIndex)
    }
    next()
  },

  methods: {
    goPay() {
      // to pay
    }
  }
}
</script>

<style>
.payment-page {
  font-size: 16px;
}
.pay-flow {
  padding: 20px;
  background: #fff;
}
.pay-em {
  color: #f44;
}
.pay-row {
  margin-bottom: 5px;
}
.order-info {
  margin-top: 20px;
}
.pay-btn {
  display: block;
  width: 80%;
  margin: 20px auto 0;
}
</style>
