import { createWebHistory, createRouter } from 'vue-router'
import { routes } from './routes.js'
import { useUserStore } from '@/stores/user.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// * Auth
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  
  if (to.meta.requiresAuth) {
    await userStore.fetchUserProfile()
    next()
    if (!userStore.isAuthenticated) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router