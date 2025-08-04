import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Einleitung.vue'
import UeberMich from '@/components/UeberMich.vue'
import WebProjekte from '@/components/WebProjekte.vue'
import DreiDProjekte from '@/components/DreiDProjekte.vue'
import Sprachen from '@/components/Sprachen.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'Startseite' },
  },
  {
    path: '/ueber-mich',
    component: UeberMich,
    meta: { title: 'Über Mich' },
  },
  {
    path: '/web-projekte',
    component: WebProjekte,
    meta: { title: 'Web Projekte', scrollToTop: true },
  },
  {
    path: '/3d-projekte',
    component: DreiDProjekte,
    meta: { title: '3D-Projekte', scrollToTop: true },
  },
  {
    path: '/sprachen',
    component: Sprachen,
    meta: { title: 'Sprachen', scrollToTop: true },
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../components/Kontakt.vue'),
  },
  {
    path: '/lebenslauf',
    name: 'Lebenslauf',
    component: () => import('../components/Lebenslauf.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Bei Zurück/Vorwärts-Button
      return savedPosition
    }

    if (to.hash) {
      // Wenn es ein Hash gibt (z.B. #kontakt), scroll dorthin
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    if (to.meta.scrollToTop) {
      // Nur bei bestimmten Routen scroll nach oben
      return { top: 0, behavior: 'smooth' }
    }

    // Standard: bleib, wo du bist
    return false
  },
})

// Titel setzen nach jeder Route
router.afterEach((to) => {
  document.title = to.meta.title || 'Loreno Biffi'
})

export default router
