// import { API_URL } from "@src/config/env";
// import { apiGetAuth } from '@src/services/api';
// import { useToast } from 'vue-toastification'

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            name: 'SaraMartin9',
            avatar: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            email: 'sara.martin@gmail.com',
            phone: '+56 999 9999 9999',
            sex : 'Femenino',
            birthday: '01/01/1990',
        },
        // isFilledData: false
    }),
    actions: {
        async setUserProfile() {
            //   if (!this.isFilledData) {
            //     await this.getUserProfile()
            //   }
        },
        async getUserProfile() {
            //   const toast = useToast()
            //   try {
            //     const response = await apiGetAuth({
            //       url: `/users/profile`
            //     })

            //     const { selectedAccount, ...userData } = response.data.data
            //     this.user = userData
            //     this.isFilledData = true
            //   }

            //   catch (error) {
            // console.error('Error:', error);
            // toast.error('Ocurrió un error al obtener los datos de tu perfil.')
            //   }
        }
    }
})
