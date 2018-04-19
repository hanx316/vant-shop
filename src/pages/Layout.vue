<template>
  <div id="layout">
    <router-view />
    <Footer-Tab v-show="showFooter" />
  </div>
</template>

<script>
import FooterTab from '@/components/FooterTab'

export default {
  data() {
    return {
      showFooter: true
    }
  },
  components: {
    FooterTab
  },
  created() {
    this.$bus.$on('hide-footer', () => {
      this.showFooter = false
    })
    this.$bus.$on('show-footer', () => {
      this.showFooter = true
    })
  }
}
</script>
