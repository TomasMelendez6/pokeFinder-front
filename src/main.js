import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import './bootstrap'
import './httpClient'
import{router} from './routers'
import store from './store'


Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
