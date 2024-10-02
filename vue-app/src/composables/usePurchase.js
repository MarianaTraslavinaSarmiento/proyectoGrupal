import { ref } from 'vue'
import { useApiCacheStore } from '@/stores/apiCache'
import { createPinia } from 'pinia'
import toast from "@/config/toast.js"
import axios from '@/config/axios.js'

const pinia = createPinia()
const apiCacheStore = useApiCacheStore(pinia)

export const useGetAllPurchases = (userId) => {

    const url = '/purchase/user/' + userId
    const purchases = ref()
    const isLoading = ref(true)

    const getAllPurchases = async () => {
        try {
            const {data} = await axios.get(url)
            purchases.value = data
            console.log(purchases.value)
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar los productos')
        }

    }

    getAllPurchases()

    return { purchases, isLoading }
}