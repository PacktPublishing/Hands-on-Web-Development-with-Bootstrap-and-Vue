import Vue from 'vue'
import App from './App.vue'


import '@babel/polyfill'

//import BootstrapVue from 'bootstrap-vue'
import BModal from 'bootstrap-vue/es/components/modal/modal'
import BModalDirective from 'bootstrap-vue/es/directives/modal/modal'

import { Layout } from 'bootstrap-vue/es/components'
import { Modal } from 'bootstrap-vue/es/components'
import { Card } from 'bootstrap-vue/es/components'

import { Scrollspy } from 'bootstrap-vue/es/directives'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

//Vue.use(BootstrapVue)
Vue.component('b-modal', BModal)
Vue.directive('b-modal', BModalDirective)

new Vue({
  render: h => h(App),
}).$mount('#app')
