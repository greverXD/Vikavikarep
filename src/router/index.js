import { createRouter, createWebHistory } from 'vue-router'

import SecurityPage from '../pages/SecurityPage.vue'
import AsiaSpaPage from '../pages/AsiaSpaPage.vue'
import ThirdPage from '../pages/Third.vue'

const routes = [
  { path: '/', component: SecurityPage },
  { path: '/asia-spa', component: AsiaSpaPage },
  { path: '/third', component: ThirdPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})