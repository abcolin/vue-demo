import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import detail from '@/views/detail'
import analysis from '@/views/detail/analysis'
import count from '@/views/detail/count'
import forecast from '@/views/detail/forecast'
import publish from '@/views/detail/publish'
import orderList from '@/views/orderList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/detail',
      component: detail,
      redirect: '/detail/count',
      children: [
        {
          path: 'analysis',
          component: analysis
        },
        {
          path: 'count',
          component: count
        },
        {
          path: 'forecast',
          component: forecast
        },
        {
          path: 'publish',
          component: publish
        }
      ]
    },
    {
      path: '/orderList',
      component: orderList
    }
  ]
})
