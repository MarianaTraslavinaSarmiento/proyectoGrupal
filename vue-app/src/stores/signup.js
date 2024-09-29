import toast from '@/config/toast'
import axios from '@/config/axios'

import { defineStore } from 'pinia'
import router from '@/router'

export const useSignupStore = defineStore('signup', {
    state: () => ({
        user: null
    }),
    getters: {
        userInfo: (state) => state.user
    },
    actions: {
        setUserSignup(user) {
            this.user = user
        },
        async registerNewUser() {
            const { confirmPassword, confirmEmail, ...user } = this.user

            try {
                await axios.post('/auth/signup', user)
                toast.success('Usuario registrado con exito')
                this.clearUser()
                router.replace('/login/session-start')
            } catch (error) {
                console.error('Error:', error)
                toast.error('Ocurrio un error al registrar el usuario')
            }
        },
        clearUser() {
            this.user = null
        }
    }
})