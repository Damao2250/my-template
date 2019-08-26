import Vue from 'vue'
import App from './App.vue'
import router  from './router'
import store from './store'
import axios from './axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

// 解决重复点击当前路由报错
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
