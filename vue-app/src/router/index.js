import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: [
  //   {
  //     path: '/app',
  //     name: 'App',
  //     // meta: { requiresAuth: true },
  //     // component: () => import('../views/AppView.vue')
  //     children: [
  //       {
  //         path: '/app/home',
  //         name: 'app-home',
  //         component: Home,
  //         alias: 'inicio',
  //         meta:{ requiresNav: true }
  //       }
  //     ]
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
})

export default router
