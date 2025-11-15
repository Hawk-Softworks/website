import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Hawk Softworks - Software for virtual pilots and air traffic controllers'
      }
    },
    {
      path: '/fsm',
      name: 'flight-strip-manager',
      component: () => import('../views/FlightStripManagerView.vue'),
      meta: {
        title: 'FlightStrip Manager - Hawk Softworks'
      }
    },
    {
      path: '/fp',
      name: 'flight-planner',
      component: () => import('../views/FlightPlannerView.vue'),
      meta: {
        title: 'FlightPlanner - Hawk Softworks'
      }
    },
    {
      path: '/legal/disclaimer',
      name: 'disclaimer',
      component: () => import('../views/legal/DisclaimerView.vue'),
      meta: {
        title: 'Disclaimer - Hawk Softworks'
      }
    },
    {
      path: '/legal/terms',
      name: 'terms',
      component: () => import('../views/legal/TermsView.vue'),
      meta: {
        title: 'Terms and Conditions - Hawk Softworks'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Hawk Softworks'
  next()
})

export default router
