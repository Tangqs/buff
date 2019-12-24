import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import us from '@/components/us'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  linkActiveClass:'linkActiveClass',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/us',
      name: 'us',
      component: us
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
