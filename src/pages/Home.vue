<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad" class="goods-list">
    <div v-for="item in goods" :key="item.id" @click="handleClick(item.id)" class="good-box">
      <img :src="item.img" class="good-pic">
      <div class="good-info">
        <span class="good-name">{{ item.name }}</span>
        <span class="hot-point">热度：{{ item.hot }}</span>
      </div>
    </div>
  </van-list>
</template>

<script>
import { CellGroup, List } from 'vant';

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
            img: 'static/goods.jpeg'
          });
        }
        this.loading = false;

        if (this.goods.length >= 20) {
          this.finished = true;
        }
      }, 500);
    },

    handleClick(id) {
      this.$router.push(`/goodpre/${id}`)
    }
  }
};
</script>

<style>
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
