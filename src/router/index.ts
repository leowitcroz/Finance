import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layout/mainLayout.vue'
import ExpensesView from '../views/ExpensesView.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/expenses',
        name: 'expeneses',
        component: ExpensesView,
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
