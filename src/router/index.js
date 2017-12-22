// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import cookies from 'js-cookie'
import {inBrowser} from '../utils'

import HelloWorld from '@/pages/HelloWorld'
import List from '@/pages/List'

Vue.use(VueRouter)
Vue.use(Meta)

const scrollBehavior = to => {
  const position = {}
  if (to.hash) {
    position.selector = to.hash
  }
  if (to.matched.some(mm => mm.meta.scrollToTop)) {
    position.x = 0
    position.y = 0
  }
  return position
}

const guardRoute = (to, from, next) => {
  var token = cookies.get('user') || !inBrowser
  if (!token) {
    next('/')
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes: [
    {path: '/', name: 'Hello', component: HelloWorld},
    {path: '/list', name: 'something', component: List},
    {name: 'password', path: '/user/password', component: List, meta: {scrollToTop: true}, beforeEnter: guardRoute}
  ]
})

export default router
