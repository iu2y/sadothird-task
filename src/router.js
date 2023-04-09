import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/TodoHome.vue'
import Edit from './components/pages/TodoEdit.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/edit', name: 'Edit', component: Edit },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
