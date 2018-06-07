<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad" class="goods-list">
    <div class="goods-list-box">
      <div v-for="item in goods" :key="item.id" @click="handleClick(item.id)" class="good-box">
        <img :src="item.index_pic" class="good-pic">
        <p class="good-info good-name">{{ item.product_name }}</p>
        <p class="good-info good-desc">{{ item.description }}</p>
        <p class="good-info good-price">¥ {{ item.price }}</p>
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
      currentPage: 0,
      pageCount: 0
    }
  },
  components: {
    [CellGroup.name]: CellGroup,
    [List.name]: List
  },
  methods: {
    onLoad() {
      product.getShopProductList({
        page: this.currentPage + 1,
        pageSize: 10
      }).then(res => {
        if (res.code !== 0) return
        this.pageCount = res.pager.pageCount
        this.goods.push(...res.items)
        if (this.currentPage >= this.pageCount) {
          this.finished = true
        }
        this.loading = false
        this.currentPage += 1
      })
    },

    handleClick(id) {
      this.$router.push(`/good-buy/${id}`)
    }
  }
}
</script>

<style scoped>
.goods-list {
  margin-bottom: 50px;
  padding: 10px;
}
.goods-list-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.good-box {
  width: 42%;
  margin-bottom: 10px;
  padding: 10px 10px;
  background: #fff;
  box-shadow: 3px 3px 3px #ccc;
  font-size: 16px;
}
.good-pic {
  display: block;
  width: 100%;
  height: 3rem;
}
.good-info {
  margin: 5px 0 0 0;
}
.good-name {
  font-weight: bold;
}
.good-desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
}
</style>
