import toast from '@/config/toast'
import axios from '@/config/axios'

import { defineStore } from 'pinia'
import router from '@/router'

export const useShoppingCartStore = defineStore('shoppingCart', {
    state: () => ({
        products: [],
        currentCoupon: null
    }),
    getters: {
        productsInCart: (state) => state.products
    },
    actions: {
        addProductToCart(product) {
            product.quantity = 1
            this.products.push(product)

            toast.success('Producto agregado al carrito')
        },
        removeProductFromCart(productId) {
            this.products = this.products.filter(product => product._id !== productId)
            toast('Producto eliminado del carrito')
        },
        updateProductQuantity(productId, quantity) {
            const product = this.products.find(product => product._id === productId)
            if (product) {
                product.quantity = quantity
            }
        },
        async purchaseProducts() {
            try {
                const response = await axios.post('/purchase', {
                    products: this.products,
                    coupon: this.currentCoupon
                })
                
                if (response.data && response.data.sessionUrl) {
                    window.location.href = response.data.sessionUrl
                } else {
                    throw new Error('No se recibió la URL de sesión de Stripe')
                }

                toast.success('Redirigiendo al pago...')
            } catch (error) {
                console.error('Error al iniciar la compra:', error)
                toast.error('Ocurrió un error al procesar la compra. Por favor, inténtelo de nuevo.')
            }
        },
        async confirmPurchase(sessionId) {
            try {
                const response = await axios.post('/purchase/confirm-purchase', { sessionId })
                
                if (response.data.status === 'success') {
                    toast.success('Compra realizada con éxito')
                    this.clearCart()
                    
                } else {
                    throw new Error('El pago no se completó correctamente')
                }
            } catch (error) {
                console.error('Error al confirmar la compra:', error)
                toast.error('Ocurrió un error al confirmar la compra. Por favor, contacte con soporte.')
                router.replace('/app/home')
            }
        },
        setCurrentCoupon(coupon) {
            if (this.productsInCart.length === 0) {
                toast.error('No hay productos en el carrito')
                return
            }
            this.currentCoupon = coupon
        },
        clearCart() {
            this.products = []
        }
    }
})
