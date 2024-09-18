import  Home  from '@views/app/home/Home.vue'
import  ShopsCrafts  from '@views/app/shops-crafts/ShopsCrafts.vue'
import  ShoppingCart  from '@views/app/shopping-cart/ShoppingCart.vue'
import  DiscountsPromotions  from '@views/app/discounts-promotions/DiscountsPromotions.vue'
import  Profile  from '@views/app/profile/Profile.vue'


export const interalRoutes = [
    {
        path: '/app/home',
        name: 'Home',
        alias: 'inicio',
        meta:{ requiresNav: true },
        component: Home
    },
    {
        path: '/app/shops-crafts',
        name: 'ShopsCrafts',
        alias: 'tiendas-artesanias',
        meta:{ requiresNav: true },
        component: ShopsCrafts
    },
    {
        path: '/app/shopping-cart',
        name: 'ShoppingCart',
        alias: 'carrito-de-compras',
        meta:{ requiresNav: true },
        component: ShoppingCart
    },
    {
        path: '/app/discounts-promotions',
        name: 'DiscountsPromotions',
        alias: 'descuentos-promociones',
        meta:{ requiresNav: true },
        component: DiscountsPromotions
    },
    {
        path: '/app/profile',
        name: 'Profile',
        alias: 'perfil',
        meta:{ requiresNav: true },
        component: Profile
    }
]


// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   // routes: [
//   //   {
//   //     path: '/app',
//   //     name: 'App',
//   //     // meta: { requiresAuth: true },
//   //     // component: () => import('../views/AppView.vue')
//   //     children: [
//   //       {
//   //         path: '/app/home',
//   //         name: 'app-home',
//   //         component: Home,
//   //         alias: 'inicio',
//   //         meta:{ requiresNav: true }
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     path: '/about',
//   //     name: 'about',
//   //     // route level code-splitting
//   //     // this generates a separate chunk (About.[hash].js) for this route
//   //     // which is lazy-loaded when the route is visited.
//   //     component: () => import('../views/AboutView.vue')
//   //   }
//   // ]
// })

// export default router