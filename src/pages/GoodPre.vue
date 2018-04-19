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
        <div class="hot">热度：{{ hot }}</div>
      </div>
      <p class="good-desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import HeaderNav from '@/components/HeaderNav'

export default {
  data() {
    return {
      id: 0,
      name: '商品名称',
      hot: '1600',
      desc: '这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字',
      tags: [],
      images: ['static/good1.jpg', 'static/good2.jpg', 'static/good3.jpg', 'static/good4.jpg']
    }
  },
  components: {
    HeaderNav,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>
.good-pic-box {
  background: #fff;
}
.good-pic {
  width: 100%;
  height: 240px;
}
.good-info-box {
  padding: 15px;
  background: #fff;
}
.good-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}
.good-desc {
  margin: 10px 0;
  font-size: 16px;
}
</style>
