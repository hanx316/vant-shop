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
      <van-progress :percentage="progress" color="#f44" class="good-progress" />
      <div class="treasure-info-panel">
        <div class="treasure-target treasure-info">
          <span>¥{{ target }}</span>
          <span>目标金额</span>
        </div>
        <div class="treasure-countdown treasure-info">
          <span>{{ countdown }}天</span>
          <span>剩余时间</span>
        </div>
        <div class="treasure-people treasure-info">
          <span>{{ support }}</span>
          <span>支持人数</span>
        </div>
      </div>
    </div>
    <van-cell title="往期开奖结果" class="treasure-history" @click="onClickHistory" is-link />
    <van-steps direction="vertical" >
      <van-step>
        <h3>xxxx 参与了</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>xxxx 参与了</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>xxxx 参与了</h3>
        <p>2016-07-10 09:30</p>
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

export default {
  data() {
    return {
      id: 0,
      name: '商品名称',
      desc: '这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字',
      progress: 30,
      target: '10000',
      countdown: 29,
      support: 146,
      images: ['static/good1.jpg', 'static/good2.jpg', 'static/good3.jpg', 'static/good4.jpg'],
      showPanel: false,
      unitPrice: 3,
      betCount: 1
    }
  },
  computed: {
    totalPrice() {
      return this.unitPrice * this.betCount
    }
  },
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
  methods: {
    onClickHistory() {
      console.log('history')
    },

    handleBetClick() {
      this.showPanel = true
    },

    submit() {
      Toast.success('投注成功')
    }
  },
  created() {
    this.$bus.$emit('hide-footer')
    this.id = this.$route.params.id
  },
  destroyed() {
    const footerActiveIndex = 2
    this.$bus.$emit('show-footer', footerActiveIndex)
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
