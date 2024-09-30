<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import BackButton from '@components/back-button/BackButton.vue';
import ChatMessage from './components/ChatMessage.vue'
import MessageInput from './components/MessageInput.vue'
import ChatIcon from '@icons/general/ChatIcon.vue';
import { useChatStore } from '@stores/chat.js'

const chatStore = useChatStore()
const messagesContainer = ref(null)

const data = computed(() => ({
    title: chatStore.currentChatType === 'store' ? 'Chat con Tienda' : 'Chat con Servicio al Cliente',
}))

const isConnected = computed(() => chatStore.isConnected(chatStore.currentChatType))
const connectionError = computed(() => chatStore.connectionError(chatStore.currentChatType))
const messages = computed(() => chatStore.messages[chatStore.currentChatType] || [])

onMounted(() => {
    chatStore.initSocket(chatStore.currentChatType)
})

onUnmounted(() => {
    chatStore.closeSocket(chatStore.currentChatType)
})

const sendMessage = (text) => {
    chatStore.sendMessage(chatStore.currentChatType, text)
}

watch(messages, () => {
    nextTick(() => {
        if (messagesContainer.value) {
            messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
        }
    })
}, { deep: true })

</script>

<template>
    <div class="chat-container">
        <header class="chat-header">
            <BackButton backgroundColor="var(--background-primary)" />
            <div class="header-content">
                <ChatIcon class="chat-icon" />
                <h1>{{ data.title }}</h1>
            </div>
        </header>

        <div class="chat-status">
            <div v-if="connectionError" class="error-message">
                Error de conexión: {{ connectionError }}
            </div>
            <div v-else-if="!isConnected" class="connecting-message">
                Conectando...
            </div>
            <div v-else class="connected-message">
                Conectado
            </div>
        </div>

      
        <div class="messages-container" ref="messagesContainer">
            {{console.log(messages)}}
            <ChatMessage v-for="(message, index) in messages" :key="index" :message="message.message" :type="message.user" />
        </div>
       
        <MessageInput @send="sendMessage" />
    </div>
</template>

<style lang="scss" scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: var(--background-base);

    .chat-header {
        background-color: var(--background-secondary);
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;

        .header-content {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            left: -50px;
            width: 100%;

            h1 {
                font-family: var(--font-bellota);
                font-size: 1.8rem;
                color: var(--text-color);
                text-wrap: wrap;
                margin: 0;
            }

            .chat-icon {
                width: 2.8rem;
                margin-right: 1rem;
            }
        }
    }

    .chat-status {
        padding: 1rem;
        display: flex;
        justify-content: center;
        font-size: large;
        font-weight: bold;
        font-family: var(--font-bellota);
        color: rgb(from var(--text-contrast) r g b / 50%);
    }

    .messages-container {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
    }
}
</style>