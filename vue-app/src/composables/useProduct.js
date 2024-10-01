import { ref } from 'vue'
import { useApiCacheStore } from '@/stores/apiCache'
import { createPinia } from 'pinia'
import toast from "@/config/toast.js"

const pinia = createPinia()
const apiCacheStore = useApiCacheStore(pinia)

export const useGetOneProduct = (id) => {
    const url = '/product/one/' + id
    const product = ref()
    const isLoading = ref(true)

    const getProduct = async () => {
        try {
            product.value = await apiCacheStore.fetchData(url)
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar el producto')
        }

    }

    getProduct()

    return { product, isLoading }
}

export const useGetAllProductsWithOffers = () => {
    const url = '/product/offers'
    const products = ref()
    const isLoading = ref(true)

    const getAllProducts = async () => {
        try {
            products.value = await apiCacheStore.fetchData(url)
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar los productos')
        }

    }

    getAllProducts()

    return { products, isLoading }
}

export const useGetAllProducts = () => {
    const url = '/product' 
    const products = ref()
    const isLoading = ref(true)

    const getAllProducts = async () => {
        try {
            products.value = await apiCacheStore.fetchData(url)
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar los productos')
        }

    }

    getAllProducts()

    return { products, isLoading }
}

export const useGetAllProductsByShopId = (id) => {
    const url = '/product/byshop/' + id 
    const products = ref()
    const isLoading = ref(true)

    const getAllProducts = async () => {
        try {
            products.value = await apiCacheStore.fetchData(url)
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar los productos')
        }

    }

    getAllProducts()

    return { products, isLoading }
}
