import '@/common/rem.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import eventBus from '@/common/eventBus'
import { Icon, Lazyload } from 'vant'
import 'vant/lib/vant-css/icon-local.css'
import App from './App'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(Lazyload)
Vue.use(Icon)
Vue.use(eventBus)

Vue.prototype.State = {
  isLogin: false,
  token: ''
}

const router = new VueRouter({ routes })

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export default app
