<template>
  <div id="winner-history-page">
    <header-nav title="往期揭晓" />
    <van-panel title="期号:100000 揭晓时间：2018-04-03 15:14" class="history-panel">
      <div class="history-info">
        <div class="winner-pic-box">
          <img src="static/goods.jpeg" class="winner-pic">
        </div>
        <div class="winner-info-box">
          <span class="winner-info">获奖者：xxx</span>
          <span class="winner-info">用户ID：1212121212</span>
          <span class="winner-info">幸运号码：12121212121</span>
        </div>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { Panel } from 'vant'
import HeaderNav from '@/components/HeaderNav'

export default {
  components: {
    HeaderNav,
    [Panel.name]: Panel
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$bus.$emit('hide-footer')
      vm.id = vm.$route.params.id
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
