import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router'
Vue.use(Router)

import Frontend from '../components/layouts/frontend'
import Backend from '../components/layouts/backend'
import HomeIndex from '../components/home'
import Mails from '../components/mails'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Frontend,
      children: [
        { path: '/', component: HomeIndex }
      ]
    },
    {
      path: '*',
      component: Backend,
      children: [
        { path: '/mails', component: Mails }
      ]
    }
  ]
})
