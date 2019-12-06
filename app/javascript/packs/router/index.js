import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router'
Vue.use(Router)

import HomeIndex from '../components/home/index.vue'
import TestPage from '../components/home/test'
import About from '../components/about'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex,
      children: [
        {
          path: '/test',
          name: 'test',
          component: TestPage
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
