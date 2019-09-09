import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import mallConfig from './mall'
import userConfig from './user'
import orderConfig from './order'
import constractConfig from './contract'
import recordsConfig from './records'

Vue.use(Router)

const isFree = true
const ROUTER = new Router({
  routes: [
    ...mallConfig,
    ...userConfig,
    ...orderConfig,
    ...constractConfig,
    ...recordsConfig,
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: {
    //     isFree,
    //     title:'hello'
    //   }
    // },
    {
      path: '/',
      redirect:'/mall',
      component: require('@/pages/mall/index').default,
      meta: {
          title: '首页',
          isFree,
      }
    },
    {
      path: '/404',
      name: '404',
      component: require('@/pages/404').default,
      meta: {
        title: '404',
        isFree
      }
    },
    {
      path: '*',    // 此处需特别注意至于最底部
      redirect: '/404'
    }
  ]
})

ROUTER.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  const {title, isFree} = to.meta
  if (!isFree) {
      unAuthRedirect(to)
      return
  }
  next()
})

ROUTER.afterEach((to, from) => {
  const {title} = to.meta
  document.title = title || '商城'
})

export default ROUTER;
let authWorking = false
export function unAuthRedirect(to){
   if (authWorking) {
      return
  }
  ROUTER.push({name: 'login', query: {redirect: to.fullPath}})
}