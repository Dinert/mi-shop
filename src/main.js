import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 组件
import './plugins/vant.js'
import "./plugins/components"

// style
import "@/assets/css/reset.css"
import "@/assets/less/common.less"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
