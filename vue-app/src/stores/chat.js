// stores/chatStore.js
import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

export const useChatStore = defineStore('chat', {
  state: () => ({
    sockets: {
      store: null,
      support: null
    },
    messages: {
      store: [],
      support: []
    },
    currentChatType: null,
    connectionStatus: {
      store: { isConnected: false, error: null },
      support: { isConnected: false, error: null }
    }
  }),

  actions: {
    initSocket(chatType) {
      const baseUrl = import.meta.env.VITE_SERVER_CHAT || 'http://localhost:3001'
      const url = chatType === 'store' ? `${baseUrl}/store` : `${baseUrl}/support`

      this.currentChatType = chatType

      if (this.sockets[chatType]) {
        this.sockets[chatType].disconnect()
      }

      this.sockets[chatType] = io(url, {
        withCredentials: true,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
        transports: ['websocket', 'polling']
      })

      this.setupSocketListeners(chatType)
    },

    setupSocketListeners(chatType) {
      const socket = this.sockets[chatType]

      socket.on('connect', () => {
        this.connectionStatus[chatType].isConnected = true
        this.connectionStatus[chatType].error = null
        console.log(`Conectado al servidor de ${chatType}`)
      })

      socket.on('connect_error', (error) => {
        this.connectionStatus[chatType].isConnected = false
        this.connectionStatus[chatType].error = error.message
        console.error(`Error de conexión (${chatType}):`, error.message)
      })

      socket.on('disconnect', (reason) => {
        this.connectionStatus[chatType].isConnected = false
        console.log(`Desconectado del servidor de ${chatType}:`, reason)
        if (reason === 'io server disconnect') {
          socket.connect()
        }
      })

      socket.on('message', (message) => {
        this.addMessage(chatType, { text: message, isSent: false })
      })

      socket.on('error', (error) => {
        console.error(`Error en el socket (${chatType}):`, error)
      })
    },

    sendMessage(chatType, text) {
      if (this.sockets[chatType] && this.connectionStatus[chatType].isConnected) {
        this.sockets[chatType].emit('send-message', text)
        this.addMessage(chatType, { text, isSent: true })
      } else {
        console.error(`No hay conexión con el servidor de ${chatType}`)
        this.initSocket(chatType)
      }
    },

    addMessage(chatType, message) {
      this.messages[chatType].push(message)
    },

    closeSocket(chatType) {
      if (this.sockets[chatType]) {
        this.sockets[chatType].disconnect()
        this.sockets[chatType] = null
        this.connectionStatus[chatType].isConnected = false
      }
    }
  },

  getters: {
    currentMessages: (state) => state.messages[state.currentChatType] || [],
    isConnected: (state) => (chatType) => state.connectionStatus[chatType].isConnected,
    connectionError: (state) => (chatType) => state.connectionStatus[chatType].error
  }
})