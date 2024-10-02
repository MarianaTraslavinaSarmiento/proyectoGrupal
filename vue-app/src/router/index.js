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
  await userStore.fetchUserProfile()
  
  if (to.meta.requiresAuth) {
    if (!userStore.isAuthenticated) {
      next('/')
    } else {
      next()
    }
  }

  if (to.meta.goHome && userStore.isAuthenticated) {
    next('/app/home')
  }

  next()

})

export default router