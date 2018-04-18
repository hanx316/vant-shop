<template>
  <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
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
    }
  }
}
</script>

<style>

</style>
