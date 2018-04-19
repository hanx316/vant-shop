export default function install(Vue) {
  Vue.prototype.$bus = new Vue()
}