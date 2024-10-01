import toast from '@/config/toast'
import axios from '@/config/axios'

import { defineStore } from 'pinia'
import router from '@/router'

export const useShoppingCartStore = defineStore('shoppingCart', {
    state: () => ({
        products: []
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
                await axios.post('/shopping-cart/purchase', this.products)
                toast.success('Compra realizada con exito')
                this.clearCart()
                router.replace('/app/home')
            } catch (error) {
                console.error('Error:', error)
                toast.error('Ocurrio un error al realizar la compra')
            }
        },
        clearCart() {
            this.products = []
        }
    }
})
