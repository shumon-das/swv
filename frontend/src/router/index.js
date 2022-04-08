import { createRouter, createWebHistory } from 'vue-router'
import appVue from '../App.vue'
import DataTable from '../views/DataTable.vue'
import HomeView from '../views/HomeView.vue'
import PrimeGird from '../views/PrimeGird.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: appVue
    },
    {
      path: '/datatable',
      name: 'datatable',
      component: DataTable
    },
    {
      path: '/risk',
      name: 'risk',
      component: HomeView
    },
    {
      path: '/control',  // basicaly it is Gird.vue
      name: 'control',
      component: PrimeGird
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
