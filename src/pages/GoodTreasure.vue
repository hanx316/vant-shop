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
      </div>
      <p class="good-desc">{{ desc }}</p>
      <van-progress v-if="progress !== false" :show-pivot="showProgressTxt" :percentage="progress" color="#f44" class="good-progress" />
      <div class="treasure-info-panel">
        <div class="treasure-target treasure-info">
          <span>¥{{ target }}</span>
          <span>目标金额</span>
        </div>
        <div class="treasure-countdown treasure-info">
          <span>{{ countDownTxt }}</span>
          <span>剩余时间</span>
        </div>
        <div class="treasure-people treasure-info">
          <span>{{ support }}</span>
          <span>支持人数</span>
        </div>
      </div>
    </div>
    <van-cell title="往期开奖结果" class="treasure-history" @click="onClickHistory" is-link />
    <van-steps direction="vertical">
      <van-step v-for="joiner in joiners" :key="joiner.id">
        <h3>{{ joiner.member_name }} 参与了</h3>
        <p>{{ joiner.pay_time }}</p>
      </van-step>
    </van-steps>
    <van-goods-action class="btn-bottom">
      <van-goods-action-big-btn @click="handleBetClick" text="立即下注" primary />
    </van-goods-action>
    <van-actionsheet v-model="showPanel" title="选择下注金额" class="bet-panel">
      <div class="bet-form">
        <van-cell title="单注金额：" :value="`限额${unitPrice}元`" />
        <van-cell title="购买数量：">
          <van-stepper v-model="betCount" />
        </van-cell>
        <van-cell title="投注金额：" :value="`${totalPrice}元`" />
        <van-button size="large" type="danger" @click="submit" class="submit-btn">立即投注</van-button>
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
  Progress,
  Cell,
  Steps,
  Step,
  Actionsheet,
  Stepper,
  Button,
  Toast
} from 'vant'
import HeaderNav from '@/components/HeaderNav'
import api from '@/api'
const { product } = api

export default {
  components: {
    HeaderNav,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tag.name]: Tag,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [Progress.name]: Progress,
    [Cell.name]: Cell,
    [Steps.name]: Steps,
    [Step.name]: Step,
    [Actionsheet.name]: Actionsheet,
    [Stepper.name]: Stepper,
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  data() {
    return {
      id: 0,
      name: '',
      desc: '',
      target: '',
      countdown: '0',
      support: 0,
      images: [],
      showPanel: false,
      unitPrice: 3,
      betCount: 1,
      joiners: [],
      finish: 0,
      progress: false,
      targetNumber: 0,
      intervalId: 0
    }
  },

  computed: {
    totalPrice() {
      return this.unitPrice * this.betCount
    },
    showProgressTxt() {
      return !Boolean(this.finish)
    },
    countDownTxt() {
      // 计算分钟
      let m = (this.countdown - this.countdown % 60) / 60
      // 计算小时
      let leftM = m % 60
      let h = (m - leftM) / 60
      // 计算天
      let leftH = h % 24
      let d = (h - leftH) / 24
      return `${d}天${leftH}时${leftM}分`
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('hide-footer')
      vm.id = vm.$route.params.id
    })
  },

  async mounted() {
    const res = await product.getTreasureDetail({ id: this.$route.params.id })
    if (res.code !== 0) return
    const data = res.data
    const productData = data.product
    this.joiners = res.join_list
    this.name = productData.product_name
    this.desc = productData.description
    this.target = data.total_price
    this.countdown = data.out_time_int
    this.support = data.join_number
    this.images = productData.pic
    this.unitPrice = data.join_price
    this.targetNumber = data.total_number
    this.finish = data.finish
    this.progress = this.calProgress()
    this.intervalId = this.countDown()
  },

  beforeRouteLeave(to, from, next) {
    const footerActiveIndex = to.path === '/home' ? 0 : 2
    this.$bus.$emit('show-footer', footerActiveIndex)
    clearInterval(this.intervalId)
    next()
  },
  
  methods: {
    onClickHistory() {
      this.$router.push(`/winner-history/${this.id}`)
    },
    handleBetClick() {
      this.showPanel = true
    },
    submit() {
      this.State.isLogin ? Toast.success('投注成功') : this.$router.push('/login')
    },
    calProgress() {
      let join = this.support
      let total = this.targetNumber
      if (this.finish === 1 || join === total) return 100
      let res = ((join / total) * 100).toFixed(1)
      return Number(res)
    },
    countDown() {
      return setInterval(() => {
        if (this.countdown < 60) {
          clearInterval(this.intervalId)
          this.countdown = 0
        } else {
          this.countdown -= 60
        }
      }, 60000)
    }
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
  margin: 10px 0 20px;
  font-size: 14px;
}
.good-progress {
  margin-bottom: 20px;
}
.treasure-info-panel {
  display: flex;
  padding: 10px;
  background: #e1e1e1;
}
.treasure-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
}
.treasure-countdown {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.treasure-history {
  margin-bottom: 10px;
  box-shadow: 3px 3px 3px #ccc;
}
.btn-bottom {
  z-index: 10;
}
.bet-panel {
  font-size: 16px;
}
.bet-form {
  padding: 20px;
}
</style>
