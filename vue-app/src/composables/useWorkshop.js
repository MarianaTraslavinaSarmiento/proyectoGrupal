import { ref } from 'vue'
import axios from "@/config/axios.js"
import toast from "@/config/toast.js"

export const useGetTrendingWorkshops = () => {
    const workshops = ref()
    const isLoading = ref(true)

    const getWorkshops = async() => {
        try {
            const { data } = await axios.get('/workshop/trending')
            workshops.value = data 
            isLoading.value = false

        } catch (err) {
            toast.error('Error al cargar los talleres del mes.')
        } 

    }
    
    getWorkshops()

    return { workshops, isLoading }
}