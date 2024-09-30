import { ref, watch } from 'vue'
import { useApiCacheStore } from '@/stores/apiCache'
import { createPinia } from 'pinia'
import toast from "@/config/toast.js"

const pinia = createPinia()
const apiCacheStore = useApiCacheStore(pinia)

export const useGetOneWorkshop = (id) => {
    const workshop = ref(null)
    const isLoading = ref(true)
    const error = ref(null)

    const getWorkshop = async () => {
        if (!id.value) {
            error.value = new Error('No se proporcionó un ID de taller válido')
            isLoading.value = false
            return
        }

        const url = `/workshop/${id.value}`
        try {
            isLoading.value = true
            error.value = null
            workshop.value = await useApiCacheStore().fetchData(url)
        } catch (err) {
            error.value = err
            toast.error('Error al cargar el taller.')
        } finally {
            isLoading.value = false
        }
    }

    watch(id, getWorkshop, { immediate: true })

    return { workshop, isLoading, error }
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

    const getWorkshops = async() => {
        const url = `/workshop/with-store-in-charge`
        try {
            isLoading.value = true
            workshops.value = await apiCacheStore.fetchData(url)
        } catch (err) {
            toast.error('Error al cargar los talleres.')
        } finally {
            isLoading.value = false
        }
    }

    getWorkshops()

    return { workshops, isLoading }
}
