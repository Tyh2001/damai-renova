import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import tyhUI from 'tyh-ui/lib'
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
Vue.use(tyhUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
