import toast from '@/config/toast'
import axios from '@/config/axios'

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
      user: null
    }),
    getters: {
      isAuthenticated: (state) => !!state.user,
      userInfo: (state) => state.user
    },
    actions: {
      async fetchUserProfile() {
        if (this.user !== null) return // Si ya tenemos los datos del usuario, no los volvemos a cargar
  
        try {
          const response = await axios.get("/user/profile")

          this.user = response.data
        } catch (error) {
          console.error('Error:', error)
          toast.error('Ocurrió un error al obtener los datos de tu perfil.')
        }
      },
      clearUser() {
        this.user = null
      },
      async updateUser(updatedUser) {
        try {
          const response = await axios.put("/user/update", updatedUser)
          console.log(response)
          this.user = response.data
          toast.success('Información actualizada con éxito')
          return {ok: true}
        } catch (error) {
          console.error('Error:', error)
          toast.error('Ocurrió un error al actualizar la información de tu perfil.')
        }
      }
    },

  })
