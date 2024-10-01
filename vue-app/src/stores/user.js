import toast from '@/config/toast'
import axios from '@/config/axios'
import { defineStore } from 'pinia'

const MAX_RETRIES = 2;
const RETRY_DELAY = 1000; 

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
        if (this.user !== null) return 
  
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
          return {ok: false}
        }
      },
      async subscribeToWorkshop(workshopId) {
        return this.retryOperation(async () => {
          const response = await axios.post("/user/subscribe-workshop", { workshopId });
          this.user = response.data.user;
          toast.success('Te has inscrito al taller con éxito');
          return { ok: true };
        }, 'inscribirte al taller');
      },
      async unsubscribeFromWorkshop(workshopId) {
        return this.retryOperation(async () => {
          const response = await axios.post("/user/unsubscribe-workshop", { workshopId });
          this.user = response.data.user;
          toast.success('Te has desinscrito del taller con éxito');
          return { ok: true };
        }, 'desinscribirte del taller');
      },
      async getSubscribedWorkshops() {
        try {
          const response = await axios.get("/user/subscribed-workshops")
          return response.data
        } catch (error) {
          console.error('Error:', error)
          toast.error('Ocurrió un error al obtener los talleres inscritos.')
          return []
        }
      },
      async retryOperation(operation, actionName, retries = 0) {
        try {
          return await operation();
        } catch (error) {
          if (retries < MAX_RETRIES) {
            console.log(`Retrying ${actionName}... (Attempt ${retries + 1})`);
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            return this.retryOperation(operation, actionName, retries + 1);
          } else {
            console.error(`Error al ${actionName}:`, error);
            toast.error(`Ocurrió un error al ${actionName}. Por favor, inténtalo de nuevo.`);
            return { ok: false };
          }
        }
      }
    },
})