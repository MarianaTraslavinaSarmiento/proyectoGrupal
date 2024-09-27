import axios from "@/composables/useShop"
import toastConfig from "@/config/vue-toastification"
import { useToast } from "vue-toastification"

const toast = new useToast()

export const useGetAllShops = async () => {
    try {
        throw new Error()
    } catch (err) {
        toast.error('Error al cargar las tiendas', toastConfig)
    }
}