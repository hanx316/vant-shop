<template>
  <div id="good-pre-page">
    <header-nav title="商品详情" />
    <div>id: {{ id }} good pre ok</div>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'

export default {
  data() {
    return {
      id: 0,
      name: '',
      hot: '',
      desc: '',
      tags: []
    }
  },
  components: {
    HeaderNav
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>

<style>

</style>
