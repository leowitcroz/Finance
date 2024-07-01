import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layout/mainLayout.vue'
import ExpensesView from '../views/ExpensesView.vue'
import AuthLayoutView from '../layout/authLayout.vue'
import LogInView from '../auth/logInView.vue'


const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: true }
      },
      {
        path: '/expenses',
        name: 'expeneses',
        component: ExpensesView,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path:'/auth',
    component:AuthLayoutView,
    children: [
      {
        path: '',
        name: 'login',
        component: LogInView,
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const authToken = localStorage.getItem('authToken'); // Obtém o token do localStorage

  if (to.meta.requiresAuth && !authToken) {
    // Se a rota requer autenticação e não há token, redireciona para a página de login
    next({ name: 'auth' });
  } else {
    // Caso contrário, permite a navegação
    next();
  }
});

export default router
