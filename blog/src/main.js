// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'stylus/reset.css'
import 'stylus/iconfont.css'
import BScroll from 'better-scroll'
Vue.prototype.BScroll = BScroll

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: e => {
    return e(App)
  }
})
