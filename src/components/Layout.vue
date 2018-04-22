<template>
  <div id="layout">
    <router-view />
    <Footer-Tab v-show="showFooter" :current="current" />
  </div>
</template>

<script>
import FooterTab from '@/components/FooterTab'

export default {
  data() {
    return {
      showFooter: true,
      current: 0
    }
  },
  components: {
    FooterTab
  },
  created() {
    this.$bus.$on('hide-footer', () => {
      this.showFooter = false
    })
    this.$bus.$on('show-footer', active => {
      this.showFooter = true
      this.current = active
    })
  }
}
</script>
