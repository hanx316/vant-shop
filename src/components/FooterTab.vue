<template>
  <van-tabbar v-model="active" @change="onTabChange">
    <van-tabbar-item icon="home">首页</van-tabbar-item>
    <van-tabbar-item icon="shop">商城</van-tabbar-item>
    <van-tabbar-item icon="point-gift">夺宝</van-tabbar-item>
    <van-tabbar-item icon="contact">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from 'vant'

export default {
  data() {
    return {
      active: 0
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  methods: {
    onTabChange(i) {
      switch(i) {
        case 0:
          this.$route.path !== '/home' && this.$router.push('/home')
          break
        case 1:
          this.$route.path !== '/shop' && this.$router.push('/shop')
          break
        case 2:
          console.log('gift')
          break
        case 3:
          console.log('setting')
          break
      }
    }
  }
}
</script>
