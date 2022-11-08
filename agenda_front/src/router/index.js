import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Guard from '../services/middleware'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  }, 
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    beforeEnter: Guard.auth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
