import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/LandingPage/LandingPage.vue') },
    { path: '/login', component: () => import('../views/UserLogin.vue') },
  ],
})

export default router
