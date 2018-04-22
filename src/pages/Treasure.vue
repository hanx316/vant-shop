<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad" class="goods-list">
    <div v-for="item in goods" :key="item.id" class="good-box">
      <img :src="item.img" class="good-pic">
      <div class="good-info">
        <span class="good-name">[进行中] {{ item.name }}</span>
        <span class="hot-point">热度：{{ item.hot }}</span>
      </div>
      <van-cell title="开奖进度：" class="good-progress">
        <van-progress :percentage="item.progress" color="#f44" class="progress-data" />
      </van-cell>
      <van-button @click="handleClick(item.id)" size="large" type="danger" class="good-btn">立即参与</van-button>
    </div>
  </van-list>
</template>

<script>
import { CellGroup, Cell, List, Progress, Button } from 'vant'

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
    [Cell.name]: Cell,
    [List.name]: List,
    [Progress.name]: Progress,
    [Button.name]: Button
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
            progress: 30
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
