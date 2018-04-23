<template>
  <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
    <van-icon name="home" slot="right" />
  </van-nav-bar>
</template>

<script>
import { NavBar, Toast } from 'vant'

export default {
  props: ['title'],
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },

    onClickRight() {
      this.$router.replace('/home')
    }
  }
}
</script>

<style>

</style>
