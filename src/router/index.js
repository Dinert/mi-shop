import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: "/classify",
    name: "Classify",
    component: () => import(/* webpackChunkName: "classify" */ "../views/Classify")
  },
  {
    path: "/shopcar",
    name: "ShopCar",
    component: () => import(/* webpackChunkName: "shopcar" */ "../views/ShopCar")
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import(/* webpackChunkName: "shopcar" */ "../views/Mine")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
