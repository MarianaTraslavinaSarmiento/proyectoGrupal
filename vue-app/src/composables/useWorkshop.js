import { ref, watch } from 'vue'
import { useApiCacheStore } from '@/stores/apiCache'
import { createPinia } from 'pinia'
import toast from "@/config/toast.js"

const pinia = createPinia()
const apiCacheStore = useApiCacheStore(pinia)

export const useGetOneWorkshop = (id) => {
    const url = `/workshop/${id}`
    const workshop = ref()
    const isLoading = ref(true)

    const getWorkshop = async() => {
        try {
            workshop.value = await apiCacheStore.fetchData(url)
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar el taller.')
        }
    }

    getWorkshop()

    return { workshop, isLoading }
}

export const useGetTrendingWorkshops = () => {
    const url = '/workshop/trending'
    const workshops = ref()
    const isLoading = ref(true)

    const getWorkshops = async() => {
        try {
            workshops.value = await apiCacheStore.fetchData(url)
            isLoading.value = false
            console.log(workshops.value)

        } catch (err) {
            toast.error('Error al cargar los talleres del mes.')
        } 

    }
    
    getWorkshops()

    return { workshops, isLoading }
}

export const useGetAllWorkshopsWithStoreInCharge = () => {
    const workshops = ref([])
    const isLoading = ref(true)
    const searchQuery = ref('')

    const getWorkshops = async() => {
        const url = `/workshop/with-store-in-charge${searchQuery.value ? `?search=${encodeURIComponent(searchQuery.value)}` : ''}`
        try {
            isLoading.value = true
            workshops.value = await apiCacheStore.fetchData(url)
        } catch (err) {
            toast.error('Error al cargar los talleres.')
        } finally {
            isLoading.value = false
        }
    }
    
    watch(searchQuery, () => {
        getWorkshops()
    })

    getWorkshops()

    return { workshops, isLoading, searchQuery }
}
