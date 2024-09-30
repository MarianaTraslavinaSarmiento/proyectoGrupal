import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

export const useChatStore = defineStore('chat', {
  state: () => ({
    sockets: {
      store: null,
      support: null,
    },
    messages: {
      store: [],
      support: [],
    },
    connectionStatus: {
      store: { isConnected: false, error: null },
      support: { isConnected: false, error: null },
    },
    currentChatType: 'support',
  }),

  actions: {
    initSocket(chatType) {
      if (this.sockets[chatType]) {
        console.warn(`Socket for ${chatType} already exists. Closing existing connection.`);
        this.closeSocket(chatType);
      }

      const socketUrl = `${import.meta.env.VITE_SERVER_CHAT}/${chatType}`;
      
      this.sockets[chatType] = io(socketUrl, {
        withCredentials: true,
        transports: ['websocket'],
      });

      this.sockets[chatType].on('connect', () => {
        this.connectionStatus[chatType].isConnected = true;
        this.connectionStatus[chatType].error = null;
        console.log(`Connected to ${chatType} chat`);
      });

      this.sockets[chatType].on('disconnect', (reason) => {
        this.connectionStatus[chatType].isConnected = false;
        console.log(`Disconnected from ${chatType} chat:`, reason);
      });

      this.sockets[chatType].on('connect_error', (error) => {
        this.connectionStatus[chatType].isConnected = false;
        this.connectionStatus[chatType].error = error.message;
        console.error(`Connection error for ${chatType} chat:`, error.message);
      });

      this.sockets[chatType].on('message', (message) => {
        this.addMessage(chatType, message);
      });

      this.currentChatType = chatType;
    },

    sendMessage(chatType, text) {
      if (this.sockets[chatType] && this.connectionStatus[chatType].isConnected) {
        this.sockets[chatType].emit('message', { message: text });
      } else {
        console.error(`Cannot send message. Socket for ${chatType} is not connected.`);
      }
    },

    addMessage(chatType, message) {
      this.messages[chatType].push(message);
    },

    closeSocket(chatType) {
      if (this.sockets[chatType]) {
        this.sockets[chatType].disconnect();
        this.sockets[chatType] = null;
        this.connectionStatus[chatType].isConnected = false;
        this.connectionStatus[chatType].error = null;
      }
    },

    clearMessages(chatType) {
      this.messages[chatType] = [];
    },
  },

  getters: {
    currentMessages: (state) => state.messages[state.currentChatType] || [],
    isConnected: (state) => (chatType) => state.connectionStatus[chatType].isConnected,
    connectionError: (state) => (chatType) => state.connectionStatus[chatType].error,
  },
});