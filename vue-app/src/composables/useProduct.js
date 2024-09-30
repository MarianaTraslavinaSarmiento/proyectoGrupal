import { ref } from 'vue'
import { useApiCacheStore } from '@/stores/apiCache'
import { createPinia } from 'pinia'
import toast from "@/config/toast.js"

const pinia = createPinia()
const apiCacheStore = useApiCacheStore(pinia)

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
