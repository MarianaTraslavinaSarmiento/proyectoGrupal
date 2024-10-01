import { ref } from 'vue'
import { useApiCacheStore } from '@/stores/apiCache'
import { createPinia } from 'pinia'
import toast from "@/config/toast.js"

const pinia = createPinia()
const apiCacheStore = useApiCacheStore(pinia)

export const useGetAllShops = () => {
    const url = '/shop'
    const shops = ref()
    const isLoading = ref(true)

    const getShops = async() => {
        try {
            shops.value = await apiCacheStore.fetchData(url)
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar las tiendas')
        } 

    }
    
    getShops()

    return { shops, isLoading }
}

export const useGetOneShop = (id) => {
    const url = '/shop/' + id
    const shop = ref()
    const isLoadingShop = ref(true)

    const getShop = async() => {
        try {
            shop.value = await apiCacheStore.fetchData(url)
            isLoadingShop.value = false
        } catch (err) {
            toast.error('Error al cargar la tienda')
        } 

    }
    
    getShop()

    return { shop, isLoadingShop }
}
