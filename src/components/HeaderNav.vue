<template>
  <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
</template>

<script>
import { NavBar, Toast } from 'vant'

export default {
  data() {
    return {
      title: 'test'
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast
  },
  methods: {
    onClickLeft() {
      Toast('返回')
    }
  }
}
</script>

<style>

</style>


