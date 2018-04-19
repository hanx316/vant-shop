import '@/common/rem.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Icon, Lazyload } from 'vant'
import 'vant/lib/vant-css/icon-local.css'
import App from './App'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(Lazyload)
Vue.use(Icon)
const router = new VueRouter({ routes }) 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
