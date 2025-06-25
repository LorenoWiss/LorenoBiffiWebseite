import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Einleitung.vue'
import UeberMich from '@/components/UeberMich.vue'

const routes = [
  { 
    path: '/', 
    component: Home,
    meta: { title: 'Startseite' }
  },
  { 
    path: '/ueber-mich', 
    component: UeberMich,
    meta: { title: 'Über Mich' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Loreno Biffi'
})

export default router