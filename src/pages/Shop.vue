<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad" class="goods-list">
    <div class="goods-list-box">
      <div v-for="item in goods" :key="item.id" @click="handleClick(item.id)" class="good-box">
        <img :src="item.img" class="good-pic">
        <p class="good-info good-name">{{ item.name }}</p>
        <p class="good-info good-desc">{{ item.desc }}</p>
        <p class="good-info good-price">¥ {{ item.price }}</p>
      </div>
    </div>
  </van-list>
</template>

<script>
import { CellGroup, List } from 'vant'

export default {
  data() {
    return {
      goods: [],
      loading: false,
      finished: false
    }
  },
  components: {
    [CellGroup.name]: CellGroup,
    [List.name]: List
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        console.log('called')
        for (let i = 0; i < 10; i++) {
          let id = this.goods.length + 1
          this.goods.push({
            id,
            name: `商品名称${id}`,
            hot: `${1000 + id * 10}`,
            img: 'static/goods.jpeg',
            desc: '这是一段商品描述文字这是一段商品描述文字这是一段商品描述文字这是一段商品描述文字这是一段商品描述文字',
            price: `${1000 + id * 10}`
          });
        }
        this.loading = false;

        if (this.goods.length >= 20) {
          this.finished = true;
        }
      }, 500);
    },

    handleClick(id) {
      this.$router.push(`/goodbuy/${id}`)
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
