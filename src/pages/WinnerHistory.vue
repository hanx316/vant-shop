<template>
  <div id="winner-history-page">
    <header-nav title="往期揭晓" />
    <van-list v-model="loading" :finished="finished" @load="onLoad" class="goods-list">
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
    </van-list>
  </div>
</template>

<script>
import { Panel, List } from 'vant'
import HeaderNav from '@/components/HeaderNav'
import api from '@/api'
const { product } = api

export default {
  components: {
    HeaderNav,
    [Panel.name]: Panel,
    [List.name]: List
  },

  data() {
    return {
      histories: [],
      loading: false,
      finished: false,
      currentPage: 1,
      pageCount: 0
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('hide-footer')
      vm.id = vm.$route.params.id
    })
  },

  // created() {
  //   product.getTreasureHistory({ id: this.$route.params.id }).then(res => {
  //     if (res.code !== 0) return
  //     this.histories = res.items
  //   })
  // },

  methods: {
    onLoad() {
      product.getTreasureHistory({
        id: this.$route.params.id,
        page: this.currentPage,
        pageSize: 10
      }).then(res => {
        if (res.code !== 0) return
        this.pageCount = res._meta.totalCount
        this.histories.push(...res.items)
        if (this.currentPage >= this.pageCount) {
          this.finished = true
        }
        this.loading = false
        this.currentPage += 1
      })
    },
  }
}
</script>

<style scoped>
#winner-history-page {
  font-size: 16px;
}
.history-panel {
  box-shadow: 3px 3px 3px #ccc;
  padding: 10px 15px;
  margin-bottom: 10px;
}
.history-info {
  display: flex;
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
