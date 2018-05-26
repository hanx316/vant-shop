<template>
  <div>
    <header-nav title="设置" />
    <van-cell icon="setting" title="退出登录" class="shadow" clickable @click="signOut" />
  </div>
</template>

<script>
import { CellGroup, Cell } from 'vant'
import HeaderNav from '@/components/HeaderNav'

export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    HeaderNav
  },

  methods: {
    signOut() {
      window.localStorage.removeItem('X_USER_INFO')
      this.$router.replace('/login')
    }
  }
}
</script>
