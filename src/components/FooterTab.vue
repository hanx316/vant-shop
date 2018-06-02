<template>
  <van-tabbar v-model="active" @change="onTabChange">
    <van-tabbar-item icon="home">首页</van-tabbar-item>
    <van-tabbar-item icon="shop">商城</van-tabbar-item>
    <van-tabbar-item icon="point-gift">夺宝</van-tabbar-item>
    <van-tabbar-item icon="contact">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },

  data() {
    return {
      active: 0
    }
  },

  props: ['current'],

  created() {
    const pathMap = {
      home: 0,
      shop: 1,
      treasure: 2,
      'user-center': 3
    }
    let pathname = this.$route.path.slice(1)
    this.active = pathMap[pathname] || 0
  },

  watch: {
    current(activeIndex) {
      activeIndex !== this.active && (this.active = activeIndex)
    }
  },

  methods: {
    onTabChange(i) {
      this.$bus.$emit('change-current', i)
      switch(i) {
        case 0:
          this.$route.path !== '/home' && this.$router.push('/home')
          break
        case 1:
          this.$route.path !== '/shop' && this.$router.push('/shop')
          break
        case 2:
          this.$route.path !== '/treasure' && this.$router.push('/treasure')
          break
        case 3:
          this.$route.path !== '/personal-center' && this.$router.push('/user-center')
          break
      }
    }
  }
}
</script>
