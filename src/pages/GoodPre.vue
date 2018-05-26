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
      <van-tag v-for="(tag, i) in tags" :key="i" mark type="danger" class="good-tag">{{ tag }}</van-tag>
    </div>
    <div class="recommend-good-list">
      <div class="recommend-title">你可能会喜欢</div>
      <div class="recommend-goods">
        <img v-for="image in recommends" :key="image.id" :src="image.index_pic" @click="handleLikeClick(image.id)" class="recommend-image">
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-big-btn @click="handlePreBuyClick" text="立即预购" primary />
    </van-goods-action>
    <van-actionsheet v-model="showPanel" title="填写预约信息" class="pre-buy-panel">
      <div class="pre-buy-form">
        <van-field v-model="username" label="昵称" icon="clear" @click-icon="onClearUsername" required />
        <van-field v-model="wechat" label="微信ID" icon="clear" @click-icon="onClearWechat" required />
        <van-button size="large" type="danger" @click="submit" class="submit-btn">提交预约信息</van-button>
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
  Field,
  Button,
  Toast
} from 'vant'
import HeaderNav from '@/components/HeaderNav'
import api from '@/api'
const { product } = api

export default {
  data() {
    return {
      id: 0,
      name: '',
      hot: '1600',
      desc: '',
      tags: [],
      images: [],
      recommends: [],
      showPanel: false,
      username: '',
      wechat: ''
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
    [Field.name]: Field,
    [Button.name]: Button,
    [Toast.name]: Toast
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('hide-footer')
      vm.id = vm.$route.params.id
    })
  },

  async mounted() {
    const res = await product.getHomeProductDetail({ id: this.$route.params.id })
    if (res.code !== 0) return
    const data = res.data
    this.id = data.id
    this.name = data.product_name
    this.desc = data.description
    this.tags = data.tags
    this.images = data.pic
    this.recommends = res.recommend
  },

  beforeRouteLeave(to, from, next) {
    const footerActiveIndex = 0
    this.$bus.$emit('show-footer', footerActiveIndex)
    next()
  },

  methods: {
    handleLikeClick(id) {
      this.$router.push(`/good-pre/${id}`)
    },

    handlePreBuyClick() {
      this.showPanel = true
    },

    onClearUsername() {
      this.username = ''
    },

    onClearWechat() {
      this.wechat = ''
    },

    submit() {
      this.State.isLogin ? Toast.success('提交成功') : this.$router.push('/login')
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
  margin: 10px 0;
  font-size: 14px;
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
.pre-buy-panel {
  font-size: 16px;
}
.pre-buy-form {
  padding: 20px;
}
.submit-btn {
  margin-top: 20px;
}
</style>
