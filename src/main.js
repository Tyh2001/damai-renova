import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import tyhUI from 'tyh-ui/lib'
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
Vue.use(tyhUI)
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
