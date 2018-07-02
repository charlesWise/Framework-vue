import Vue from 'vue'
import Router from 'vue-router'

const Index = r => require.ensure([], () => r(require('@/views/Index/Index')), 'Index')     //主页
const Pay = r => require.ensure([], () => r(require('@/views/Pay/Pay')), 'Pay')     //支付
const Error = r => require.ensure([], () => r(require('@/views/404/error'), 'Error'))   //404
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: '首页',
      component: Index,
      meta: {keepAlive: true},
    },
    {
      path: '/pay',
      name: '支付',
      component: Pay
    },
    {
      path: '/error',
      name: '找不到该页面',
      component: Error
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})
