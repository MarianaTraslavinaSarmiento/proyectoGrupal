import Home from '@views/app/home/Home.vue'
import ShopsCrafts from '@views/app/shops-crafts/ShopsCrafts.vue'
import ShoppingCart from '@views/app/shopping-cart/ShoppingCart.vue'
import DiscountsPromotions from '@views/app/discounts-promotions/DiscountsPromotions.vue'
import Profile from '@views/app/profile/Profile.vue'

import PurchaseMadeMessage from "@views/app/your-shopping-cart/PurchaseMadeMessage.vue"

import RedeemCoupons from "@views/app/redeem-coupons/RedeemCoupons.vue"

import EducationalWorkshops from "@views/app/educational-workshops/EducationalWorkshops.vue"
import WorkshopInfo from '@/views/app/workshop-info/WorkshopInfo.vue'
import WorkshopAbout from '@/views/app/workshop-about/WorkshopAbout.vue'
import DetailsHandicrafts from '@/views/app/details-handicrafts/DetailsHandicrafts.vue'

import ProductsByCategories from "@views/app/products-by-categories/ProductsByCategories.vue"

import CustomerService from "@views/app/customer-service/CustomerService.vue"
import CommentsToTheApp from "@views/app/comments-to-the-app/CommentsToTheApp.vue"
import Settings from '@/views/app/settings/Settings.vue'

import Chat from '@views/app/chat/Chat.vue'
import Shop from '@/views/app/shop/Shop.vue'
import FavoriteCrafts from '@/views/app/favorite-crafts/FavoriteCrafts.vue'
import PurchasesMade from '@/views/app/purchases-made/PurchasesMade.vue'
import { useShoppingCartStore } from '@/stores/shoppingCart'


export const internalRoutes = [
    {
        path: '/app/home',
        name: 'Home',
        alias: 'inicio',
        meta: { requiresNav: true, requiresHeadBar: true, requiresAuth: true },
        component: Home
    },
    {
        path: '/app/shops-crafts',
        name: 'ShopsCrafts',
        alias: 'tiendas-artesanias',
        meta: { requiresNav: true, requiresHeadBar: true, requiresAuth: true},
        component: ShopsCrafts
    },
    {
        path: '/app/shops-crafts/:id',
        name: 'ShopsCraftsOne',
        alias: 'tiendas-artesanias/:id',
        meta: { requiresAuth: true},
        component: Shop
    },
    {
        path: '/app/shopping-cart',
        name: 'ShoppingCart',
        alias: 'carrito-de-compras',
        meta: { requiresNav: true, requiresHeadBar: true, requiresAuth: true },
        component: ShoppingCart
    },
    {
        path: '/app/discounts-promotions',
        name: 'DiscountsPromotions',
        alias: 'descuentos-promociones',
        meta: { requiresNav: true, requiresHeadBar: true, requiresAuth: true },
        component: DiscountsPromotions
    },
    {
        path: '/app/favorite-crafts/:category',
        name: 'FavoriteCrafts',
        alias: 'artesanias-favoritas/:category',
        meta: { requiresAuth: true },
        component: FavoriteCrafts
    },
    {
        path: '/app/purchases-made',
        name: 'PurchasesMade',
        alias: 'compras-realizadas',
        component: PurchasesMade
    },
    {
        path: '/app/profile',
        name: 'Profile',
        alias: 'perfil',
        meta: { requiresNav: true, requiresHeadBar: true, requiresAuth: true },
        component: Profile
    },
    {
        path: '/app/shopping-cart',
        name: 'ShoppingCart',
        alias: 'carrito-de-compras',
        meta: { requiresNav: true, requiresHeadBar: true, requiresAuth: true },
        component: ShoppingCart
    },
    {
        path: '/app/purchase-message',
        name: 'PurchaseMadeMessage',
        alias: 'mensaje-de-compra-con-exito',
        meta: { requiresAuth: true},
        component: PurchaseMadeMessage,
        beforeEnter: (to, from, next) => {
            const sessionId = to.query.session_id
            if (sessionId) {
              const store = useShoppingCartStore()
              store.confirmPurchase(sessionId)
            }
            next()
        }
    },
    {
        path: '/app/redeem-coupons',
        name: 'RedeemCoupons',
        alias: 'canjear-cupon',
        meta: { requiresAuth: true},
        component: RedeemCoupons
    },
    {
        path: '/app/educational-workshops',
        name: 'EducationalWorkshops',
        alias: 'talleres-educativos',
        meta: { requiresAuth: true},
        component: EducationalWorkshops
    },
    {
        path: '/app/educational-workshops/info/:workshop',
        name: 'WorkshopInfo',
        alias: 'talleres-educativos/info/:workshop',
        meta: { requiresAuth: true },
        component: WorkshopInfo
    },
    {
        path: '/app/educational-workshops/about/:workshop',
        name: 'AboutWorkshop',
        alias: 'talleres-educativos/acerca-de/:workshop',
        meta: { requiresAuth: true},
        component: WorkshopAbout
    },
    {
        path: '/app/products-by-categories/:category',
        name: 'productsByCategories',
        alias: 'productos-por-categoria/:category',
        meta: { requiresAuth: true},
        component: ProductsByCategories
    },
    {
        path: '/app/details-handicrafts/:id',
        name: 'detailsOfHandicrafts',
        alias: 'detalles-de-artesanias/:id',
        meta: { requiresAuth: true},
        component: DetailsHandicrafts
    },
    {
        path: '/app/customer-service',
        name: 'CustomerService',
        alias: 'atencion-al-cliente',
        meta: { requiresAuth: true},
        component: CustomerService
    },
    {
        path: '/app/customer-service/chat',
        name: 'Chat',
        alias: 'atencion-al-cliente/chat',
        meta: { requiresAuth: true},
        component: Chat
    },
    {
        path: '/app/settings',
        name: 'Settings',
        alias: 'ajustes',
        meta: { requiresAuth: true},
        component: Settings
    },
    {
        path: '/app/coments',
        name: 'Coments',
        alias: 'comentarios',
        meta: { requiresAuth: true},
        component: CommentsToTheApp
    },
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