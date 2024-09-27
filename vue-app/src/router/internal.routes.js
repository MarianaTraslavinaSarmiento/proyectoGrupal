import Home from '@views/app/home/Home.vue'
import ShopsCrafts from '@views/app/shops-crafts/ShopsCrafts.vue'
import ShoppingCart from '@views/app/shopping-cart/ShoppingCart.vue'
import DiscountsPromotions from '@views/app/discounts-promotions/DiscountsPromotions.vue'
import Profile from '@views/app/profile/Profile.vue'

import WorkshopsAndCraftStores from "@views/app/workshops-crafts-stores/WorkshopsAndCraftStores.vue"
import ProductsByCategories from "@views/app/products-by-categories/ProductsByCategories.vue"
import GeneralPublicInfoWorkshops from "@views/app/educational-workshops/GeneralPublicInfoWorkshops.vue"
import PurchaseMadeMessage from "@views/app/your-shopping-cart/PurchaseMadeMessage.vue"
import MoreInformationAboutTheWorkshop from "@views/app/educational-workshops/MoreInformationAboutTheWorkshop.vue"

import CustomerService from "@views/app/customer-service/CustomerService.vue"
import CommentsToTheApp from "@views/app/comments-to-the-app/CommentsToTheApp.vue"
import Settings from '@/views/app/settings/Settings.vue'


export const internalRoutes = [
    {
        path: '/app/home',
        name: 'Home',
        alias: 'inicio',
        meta: { requiresNav: true, requiresHeadBar: true },
        component: Home
    },
    {
        path: '/app/shops-crafts',
        name: 'ShopsCrafts',
        alias: 'tiendas-artesanias',
        meta: { requiresNav: true, requiresHeadBar: true },
        component: ShopsCrafts
    },
    {
        path: '/app/shopping-cart',
        name: 'ShoppingCart',
        alias: 'carrito-de-compras',
        meta: { requiresNav: true, requiresHeadBar: true },
        component: ShoppingCart
    },
    {
        path: '/app/discounts-promotions',
        name: 'DiscountsPromotions',
        alias: 'descuentos-promociones',
        meta: { requiresNav: true, requiresHeadBar: true },
        component: DiscountsPromotions
    },
    {
        path: '/app/profile',
        name: 'Profile',
        alias: 'perfil',
        meta: { requiresNav: true, requiresHeadBar: true },
        component: Profile
    },
     {
        path: '/app/settings',
        name: 'Settings',
        alias: 'ajustes',
        component: Settings
    },
      {
        path: '/app/coments',
        name: 'Coments',
        alias: 'comentarios',
        component: CommentsToTheApp
    },
    {
        path: '/app-settings/customer-service',
        name: 'CustomerService',
        alias: 'atencion-al-cliente',
        component: CustomerService
    }
    // {
    //     path: '/app/workshops-craft-stores',
    //     name: 'workshopsAndCraftStores',
    //     alias: 'talleres-y-tiendas',
    //     component: WorkshopsAndCraftStores
    // },
    // {
    //     path: '/app/products-by-categories',
    //     name: 'productsByCategories',
    //     alias: 'productos-por-categoria',
    //     component: ProductsByCategories
    // },
    // ,
    // {
    //     path: '/educational-workshops/GeneralPublicInfoWorkshops',
    //     name: 'GeneralPublicInfoWorkshops',
    //     component: GeneralPublicInfoWorkshops
    // },
    // {
    //     path: '/your-shopping-cart/PurchaseMadeMessage',
    //     name: 'PurchaseMadeMessage',
    //     component: PurchaseMadeMessage
    // }
    // {
    //     path: '/educational-workshops/MoreInformationAboutTheWorkshop',
    //     name: 'MoreInformationAboutTheWorkshop',
    //     component: MoreInformationAboutTheWorkshop
    // }
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