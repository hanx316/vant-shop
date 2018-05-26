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

const userInfoStorage = window.localStorage.getItem('X_USER_INFO')
let userInfo = {}
if (userInfoStorage) {
  userInfo = JSON.parse(userInfoStorage)
}

Vue.prototype.State = {
  isLogin: !!userInfo.access_token,
  token: userInfo.access_token || '',
  userInfo
}

const router = new VueRouter({ routes })

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export default app
