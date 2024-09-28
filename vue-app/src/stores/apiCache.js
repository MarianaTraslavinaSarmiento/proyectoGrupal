import { defineStore } from 'pinia'
import axios from '@/config/axios'

export const useApiCacheStore = defineStore('apiCache', {
  state: () => ({
    cache: {}
  }),
  actions: {
    async fetchData(url, expirationTime = 5 * 60 * 1000) {
      const cachedItem = this.cache[url]
      const now = Date.now()

      if (cachedItem && now - cachedItem.timestamp < expirationTime) {
        console.log('Returning cached data for:', url)
        return cachedItem.data
      }

      console.log('Fetching fresh data for:', url)
      const response = await axios.get(url)
      this.cache[url] = {
        data: response.data,
        timestamp: now
      }

      return response.data
    },
    clearCache() {
      this.cache = {}
    }
  }
})