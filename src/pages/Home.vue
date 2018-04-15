<template>
  <van-list v-model="loading" :finished="finished" @load="onLoad">
    <van-cell v-for="item in goods" :key="item" :title="item + ''" />
  </van-list>
</template>

<script>
import { Cell, List, Icon } from 'vant';

export default {
  data() {
    return {
      goods: [],
      loading: false,
      finished: false
    }
  },
  components: {
    [Cell.name]: Cell,
    [List.name]: CellGroup,
    [Icon.name]: Icon
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.goods.push(this.goods.length + 1);
        }
        this.loading = false;

        if (this.goods.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style>
.van-cell__title .van-icon {
  font-size: 18px;
}
</style>