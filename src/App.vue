<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { Icon } from 'vant'

export default {
  components: {
    [Icon.name]: Icon
  }
}
</script>

<style>
body {
  background-color: #f8f8f8;
}
</style>
