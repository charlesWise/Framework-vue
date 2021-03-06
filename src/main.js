// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores'
import './utils/rem.min'

import Head from '@/components/head'
import Bottom from '@/components/Bottom'
import Loading from '@/components/loading'
import AlertTip from '@/components/alertTip'
import FastClick from 'fastclick'

//全局注册组件
Vue.component('v-head', Head);
Vue.component('v-bottom', Bottom);
Vue.component('v-loading',Loading);
Vue.component('alert-tip', AlertTip);

Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
