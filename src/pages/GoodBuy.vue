<template>
  <div id="good-pre-page">
    <header-nav title="商品详情" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="good-pic-box">
        <img v-lazy="image" class="good-pic" />
      </van-swipe-item>
    </van-swipe>
    <div class="good-info-box">
      <div class="good-info">
        <div class="name">{{ name }}</div>
        <!-- <div class="hot">热度：{{ hot }}</div> -->
      </div>
      <p class="good-desc">{{ desc }}</p>
      <p class="good-price">¥ {{ price }}</p>
      <van-tag v-for="(tag, i) in tags" :key="i" mark type="danger" class="good-tag">{{ tag }}</van-tag>
    </div>
    <div class="recommend-good-list">
      <div class="recommend-title">产品详情图片</div>
      <div class="recommend-goods">
        <img v-for="(image, i) in details" :key="i" :src="image" class="recommend-image">
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-big-btn @click="handleBuyClick" text="立即下单" primary />
    </van-goods-action>
    <van-actionsheet v-model="showPanel" title="填写订单信息" class="buy-panel">
      <div class="buy-form">
        <van-card :thumb="images[0]" class="buy-good-info">
          <div slot="title" class="buy-good-info-price">¥ {{ price }}</div>
          <div slot="desc">{{ name }}</div>
        </van-card>
        <van-cell title="购买数量：">
          <van-stepper v-model="buyCount" />
        </van-cell>
        <van-cell title="订单金额：" :value="totalPrice" />
        <van-button size="large" type="danger" @click="submit" class="submit-btn">立即支付</van-button>
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
import {
  Swipe,
  SwipeItem,
  Tag,
  GoodsAction,
  GoodsActionBigBtn,
  Actionsheet,
  Cell,
  Card,
  Stepper,
  Button,
  Toast
} from 'vant'
import HeaderNav from '@/components/HeaderNav'

export default {
  data() {
    return {
      id: 0,
      name: '商品名称',
      hot: '1600',
      price: '1600',
      desc: '这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字',
      tags: ['标签1', '标签标签2', '标签3', '标签4', '标签标签标签5', '标签标签6'],
      images: ['static/good1.jpg', 'static/good2.jpg', 'static/good3.jpg', 'static/good4.jpg'],
      details: ['static/goods.jpeg', 'static/goods.jpeg', 'static/goods.jpeg', 'static/goods.jpeg'],
      showPanel: false,
      buyCount: 1
    }
  },
  computed: {
    totalPrice() {
      let price = Number(this.price)
      return price * this.buyCount
    }
  },
  components: {
    HeaderNav,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tag.name]: Tag,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [Actionsheet.name]: Actionsheet,
    [Cell.name]: Cell,
    [Card.name]: Card,
    [Stepper.name]: Stepper,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  methods: {
    handleBuyClick() {
      this.showPanel = true
    },

    submit() {
      this.State.isLogin ? Toast.success('订购成功') : this.$router.push('/login')
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('hide-footer')
      vm.id = vm.$route.params.id
    })
  },
  beforeRouteLeave(to, from, next) {
    const footerActiveIndex = 1
    this.$bus.$emit('show-footer', footerActiveIndex)
    next()
  }
}
</script>

<style scoped>
#good-pre-page {
  margin-bottom: 50px;
}
.good-pic-box {
  background: #fff;
}
.good-pic {
  width: 100%;
  height: 240px;
}
.good-info-box {
  margin-bottom: 10px;
  padding: 15px;
  background: #fff;
  box-shadow: 3px 3px 3px #ccc;
  font-size: 16px;
}
.good-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}
.good-desc {
  margin: 10px 0;
  font-size: 14px;
}
.good-price {
  margin: 10px 0;
  font-size: 22px;
  font-weight: bold;
}
.good-tag {
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 14px;
}
.recommend-good-list {
  padding: 15px;
  background: #fff;
  font-size: 16px;
}
.recommend-title {
  margin-bottom: 10px;
  font-weight: 600;
}
.recommend-goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recommend-image {
  width: 48%;
  height: 150px;
  margin-bottom: 10px;
}
.buy-panel {
  font-size: 16px;
}
.buy-form {
  padding: 20px;
}
.buy-good-info {
  background-color: #fff;
}
.buy-good-info-price {
  margin-top: 20px;
}
</style>
