<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad" class="goods-list">
    <div v-for="item in goods" :key="item.id" @click="handleClick(item.id)" class="good-box">
      <img :src="item.index_pic" class="good-pic">
      <div class="good-info">
        <span class="good-name">{{ item.product_name }}</span>
        <!-- <span class="hot-point">热度：{{ item.hot }}</span> -->
      </div>
    </div>
  </van-list>
</template>

<script>
import { CellGroup, List } from 'vant'
import api from '@/api'
const { product } = api

export default {
  data() {
    return {
      goods: [],
      loading: false,
      finished: false,
      currentPage: 1,
      pageCount: 0
    }
  },

  components: {
    [CellGroup.name]: CellGroup,
    [List.name]: List
  },

  methods: {
    onLoad() {
      product.getHomeProductList({
        page: this.currentPage,
        pageSize: 10
      }).then(res => {
        this.pageCount = res.pager.totalCount
        this.goods.push(...res.items)
        if (this.currentPage >= this.pageCount) {
          this.finished = true
        }
        this.loading = false
        this.currentPage += 1
      })
    },
    handleClick(id) {
      this.$router.push(`/good-pre/${id}`)
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
  height: 6rem;
  margin-bottom: 10px;
  padding: 10px 10px 0;
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
</style>
