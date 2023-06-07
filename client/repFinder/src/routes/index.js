import { createRouter,createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../views/home.vue') },
  { path: '/equipe', component: () => import('../views/equipe.vue') },
  { path: '/login', component: () => import('../views/login.vue') },
  { path: '/adm', component: () => import('../views/dashboard-adm.vue') },
  { path: '/repr', component: () => import('../views/dashboard-repr.vue') },
  { path: '/consulta', component: () => import('../views/consulta-rota.vue') },
  { path: '/cadastro', component: () => import('../views/cadastro-rep.vue') },
  { path: '/busca', component: () => import('../views/busca-rep.vue') },
  { path: '/alterar', component: () => import('../views/alterar-rep.vue') },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;