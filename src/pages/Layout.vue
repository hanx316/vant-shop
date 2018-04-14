<template>
  <div id="layout">
    <router-view />
    <Footer-Tab />
  </div>
</template>

<script>
import FooterTab from '@/components/FooterTab'

export default {
  components: {
    FooterTab
  }
}
</script>

