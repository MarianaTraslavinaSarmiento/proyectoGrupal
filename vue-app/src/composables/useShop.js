import { ref } from 'vue'
import axios from "@/config/axios.js"
import toast from "@/config/toast.js"

export const useGetAllShops = () => {
    const shops = ref()
    const isLoading = ref(true)

    const getShops = async() => {
        try {
            const { data } = await axios.get('/shop')
            shops.value = data 
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar las tiendas')
        } 

    }
    
    getShops()

    return { shops, isLoading }
}
