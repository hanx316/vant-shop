<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad" class="goods-list">
    <div v-for="item in goods" :key="item.id" class="good-box">
      <img :src="item.product.index_pic" class="good-pic">
      <div class="good-info">
        <span class="good-name">[{{ item.finish === 0 ? '进行中' : '已完成' }}] {{ item.product.product_name }}</span>
        <!-- <span class="hot-point">热度：{{ item.hot }}</span> -->
      </div>
      <van-cell title="开奖进度：" class="good-progress">
        <van-progress :show-pivot="showProgressTxt(item)" :percentage="calProgress(item)" color="#f44" class="progress-data" />
      </van-cell>
      <van-button @click="handleClick(item.id)" size="normal" type="danger" class="good-btn">立即参与</van-button>
    </div>
  </van-list>
</template>

<script>
import { CellGroup, Cell, List, Progress, Button } from 'vant'
import api from '@/api'
const { product } = api

export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [List.name]: List,
    [Progress.name]: Progress,
    [Button.name]: Button
  },

  data() {
    return {
      goods: [],
      loading: false,
      finished: false,
      currentPage: 0,
      pageCount: 0
    }
  },
  
  methods: {
    onLoad() {
      product.getTreasureList({
        page: this.currentPage + 1,
        pageSize: 10
      }).then(res => {
        if (res.code !== 0) return
        this.pageCount = res.pager.pageCount
        this.goods.push(...res.items)
        if (++this.currentPage >= this.pageCount) {
          this.finished = true
        }
        this.loading = false
      })
    },
    handleClick(id) {
      this.$router.push(`/good-treasure/${id}`)
    },
    calProgress(item) {
      let join = item.join_number
      let total = item.total_number
      if (item.finish === 1 || join === total) return 100
      let res = ((join / total) * 100).toFixed(1)
      return Number(res)
    },
    showProgressTxt(item) {
      return !Boolean(item.finish)
    }
  }
}
</script>

<style scoped>
.goods-list {
  margin-bottom: 50px;
  padding: 20px;
}
.good-box {
  margin-bottom: 10px;
  padding: 10px 10px;
  background: #fff;
  box-shadow: 3px 3px 3px #ccc;
}
.good-pic {
  display: block;
  width: 100%;
  height: 5rem;
}
.good-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  font-size: 16px;
}
.good-progress {
  padding: 0 0 10px;
}
.progress-data {
  margin-top: 10px;
}
.good-btn {
  display: block;
  width: 60%;
  margin: 10px auto 0;
}
</style>
