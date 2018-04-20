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
      <van-tag v-for="(tag, i) in tags" :key="i" mark type="danger" class="good-tag">{{ tag }}</van-tag>
    </div>
    <div class="recommend-good-list">
      <div class="recommend-title">你可能会喜欢</div>
      <div class="recommend-goods">
        <img v-for="(image, i) in recommends" :key="i" :src="image" class="recommend-image">
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-big-btn text="立即购买" primary />
    </van-goods-action>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Tag, GoodsAction, GoodsActionBigBtn } from 'vant'
import HeaderNav from '@/components/HeaderNav'

export default {
  data() {
    return {
      id: 0,
      name: '商品名称',
      hot: '1600',
      desc: '这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字这是一段产品描述文字',
      tags: ['标签1', '标签标签2', '标签3', '标签4', '标签标签标签5', '标签标签6'],
      images: ['static/good1.jpg', 'static/good2.jpg', 'static/good3.jpg', 'static/good4.jpg'],
      recommends: ['static/goods.jpeg', 'static/goods.jpeg', 'static/goods.jpeg', 'static/goods.jpeg']
    }
  },
  components: {
    HeaderNav,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tag.name]: Tag,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn
  },
  created() {
    this.$bus.$emit('hide-footer')
    this.id = this.$route.params.id
  },
  destroyed() {
    this.$bus.$emit('show-footer')
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
</style>
