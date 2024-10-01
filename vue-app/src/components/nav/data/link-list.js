import HomeIcon from "@icons/nav/HomeIcon.vue"
import ShoppingCartIcon from "@icons/nav/ShoppingCartIcon.vue"
import StrokePromotionIcon from "@icons/nav/StrokePromotionIcon.vue"
import ProfileIcon from "@icons/nav/ProfileIcon.vue"
import StoreIcon from "@icons/nav/StoreIcon.vue"

export default [
  {
    pageName: 'ShopsCrafts',
    text: 'Shops & Crafts',
    alias: 'tiendas-artesanias',
    icon: StoreIcon,
  },
  {
    pageName: 'DiscountsPromotions',
    text: 'Discounts & Promotions',
    alias: 'descuentos-promociones',
    icon: StrokePromotionIcon,
  },
  {
    pageName: 'Home',
    text: 'Home',
    alias: 'inicio',

    icon: HomeIcon,
  },
  {
    pageName: 'ShoppingCart',
    text: 'Shopping Cart',
    alias: 'carrito-de-compras',
    icon: ShoppingCartIcon,
  },
  {
    pageName: 'Profile',
    text: 'Profile',
    alias: 'perfil',
    icon: ProfileIcon,
  }

]