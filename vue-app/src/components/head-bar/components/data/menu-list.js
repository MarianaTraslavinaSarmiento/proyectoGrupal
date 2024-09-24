import SuscribeWorksshopIcon from '@icons/general/SuscribeWorksshopIcon.vue'
import CommentIcon from '@icons/general/CommentIcon.vue'
import HeartLineIcon from '@icons/general/HeartLineIcon.vue'
import CouponIcon from '@icons/general/CouponIcon.vue'

import ShoppingBagIcon from '@icons/side-menu/ShoppingBagIcon.vue'
import CustomerServiceIcon from '@icons/side-menu/CustomerServiceIcon.vue'
import SettingsIcon from '@icons/side-menu/SettingsIcon.vue'

export default [
  {
    pageName: 'Favorites',
    text: 'Lista de favoritos',
    alias: 'lista-de-favoritos',
    icon: HeartLineIcon,
  },
  {
    pageName: 'DiscountsPromotions',
    text: 'Discounts & Promotions',
    alias: 'descuentos-promociones',
    icon: ShoppingBagIcon,
  },
  {
    pageName: 'Workshops',
    text: 'Talleres',
    alias: 'talleres',
    icon: SuscribeWorksshopIcon,
  },
  {
    pageName: 'RedeemCoupon',
    text: 'Canjear cupón',
    alias: 'canjear-cupon',
    icon: CouponIcon,
  },
  {
    separator: true,
  },
  {
    pageName: 'Settings',
    text: 'Ajustes',
    alias: 'ajustes',
    icon: SettingsIcon,
  },
  {
    pageName: 'Comments',
    text: 'Comentarios',
    alias: 'comentarios',
    icon: CommentIcon,
  },
  {
    pageName: 'CustomerService',
    text: 'Atención al cliente',
    alias: 'atencion-al-cliente',
    icon: CustomerServiceIcon
  }
]