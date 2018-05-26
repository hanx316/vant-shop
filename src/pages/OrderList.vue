<template>
  <div>
    <header-nav title="我的订单" />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
import api from '@/api'
const { user } = api

export default {
  components: {
    HeaderNav
  },

  created() {
    user.getOrderList().then(res => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>
