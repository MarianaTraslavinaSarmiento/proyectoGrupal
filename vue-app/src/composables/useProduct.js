import { ref } from 'vue'
import { useApiCacheStore } from '@/stores/apiCache'
import { createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
import toast from "@/config/toast.js"
import axios from '@/config/axios.js'

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


export const useAddToFavorites = (productId) => {
    const userStore = useUserStore();
    const url = '/user/add-to-favorites'

    const addProductsToFavorites= async() => {
        
        try {
            const response = await axios.post(url, { productId })
            userStore.user.favorites.push(productId)
            toast.success('Producto agregado a favoritos')
        } catch (err) {
            console.error(err)
            toast.error('Error al agregar producto a favoritos')
        }
    }

    addProductsToFavorites()
}


export const useDeleteFavorites = (productId) => {
    const userStore = useUserStore();
    const url = '/user/delete-favorites/' + productId

    const deleteProductsFromFavorites= async() => {

        try {
            await axios.delete(url)
            userStore.user.favorites = userStore.user.favorites.filter(favorite => favorite != productId)
        } catch (err) {
            console.error(err)
        }
    }

    deleteProductsFromFavorites()
}



export const useGetAllFavoriteProducts = () => {
    const url = '/user/favorites'
    const favoriteProducts = ref()
    const isLoading = ref(true)

    const getAllFavoriteProducts = async () => {
        try {
            const {data} = await axios.get(url)
            favoriteProducts.value = data
            isLoading.value = false
        } catch (err) {
            toast.error('Error al cargar los productos favoritos')
        }

    }

    getAllFavoriteProducts()
    return { favoriteProducts, isLoading }
}