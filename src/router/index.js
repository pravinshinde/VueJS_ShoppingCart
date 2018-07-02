import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import Cart from '@/views/Cart/Cart'
import ItemDetails from '@/components/StockItem/ItemDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/itemdetails/:id',
      name: 'itemdetails',
      props: true,
      component: ItemDetails
    }
  ]
})
