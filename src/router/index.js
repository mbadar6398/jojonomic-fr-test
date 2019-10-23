import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


/** Load Component */
function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: loadView('Home')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
