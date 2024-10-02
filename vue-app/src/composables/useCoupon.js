import { ref } from 'vue'
import toast from "@/config/toast.js"
import axios from '@/config/axios.js'


export const useGetAllCoupons = () => {
    const url = '/voucher'
    const coupons = ref()
    const isLoading = ref(true)

    const getCoupons = async () => {
        try {
            const { data } = await axios.get(url)
            coupons.value = data
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar los cupones')
        }
    }

    getCoupons()

    return { coupons, isLoading }
}

export const useValidateCoupon = async (couponCode) => {
    const url = '/voucher/validate'

    try {
        const { data } = await axios.post(url, { code: couponCode })

        toast.success('Cupon validado')
        return data
    } catch (err) {
        console.log(err)
        toast.error('Error al validar el cupón')
    }
}
