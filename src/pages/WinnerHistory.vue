<template>
  <div id="winner-history-page">
    <header-nav title="往期揭晓" />
    <van-panel v-for="history in histories" :key="history.id" :title="`期号:${history.id} 揭晓时间：${history.prize_time}`" class="history-panel">
      <div class="history-info">
        <div class="winner-pic-box">
          <img :src="history.avatar" class="winner-pic">
        </div>
        <div class="winner-info-box">
          <span class="winner-info">获奖者：{{ history.member_name }}</span>
          <span class="winner-info">用户ID：{{ history.member_id }}</span>
          <span class="winner-info">幸运号码：{{ history.prize_number }}</span>
        </div>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { Panel } from 'vant'
import HeaderNav from '@/components/HeaderNav'
import api from '@/api'
const { product } = api

export default {
  components: {
    HeaderNav,
    [Panel.name]: Panel
  },

  data() {
    return {
      histories: []
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('hide-footer')
      vm.id = vm.$route.params.id
    })
  },

  created() {
    product.getTreasureHistory({ id: this.$route.params.id }).then(res => {
      if (res.code !== 0) return
      this.histories = res.items
    })
  }
}
</script>

<style scoped>
#winner-history-page {
  font-size: 16px;
}
.history-panel {
  box-shadow: 3px 3px 3px #ccc;
  margin-bottom: 10px;
}
.history-info {
  display: flex;
  padding: 10px 15px;
}
.winner-pic-box {
  width: 60px;
  height: 60px;
}
.winner-pic {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.winner-info-box {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}
.winner-info {
  margin-bottom: 4px;
}
</style>
