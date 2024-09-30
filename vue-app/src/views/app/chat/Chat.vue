<script setup>
import { ref, onUpdated, computed, onMounted, onUnmounted } from 'vue'
import BackButton from '@components/back-button/BackButton.vue';
import ChatMessage from './components/ChatMessage.vue'
import MessageInput from './components/MessageInput.vue'
import ChatIcon from '@icons/general/ChatIcon.vue';
import { useChatStore } from '@stores/chat.js'

const chatStore = useChatStore()
const messagesContainer = ref(null)
const chatType = ref('support') // o 'store', según se necesite

const data = ref({
    title: chatType.value === 'store' ? 'Chat con Tienda' : 'Chat con Servicio al Cliente',
})

const isConnected = computed(() => chatStore.isConnected(chatType.value))
const connectionError = computed(() => chatStore.connectionError(chatType.value))

onMounted(() => {
    chatStore.initSocket(chatType.value)
})

onUnmounted(() => {
    chatStore.closeSocket(chatType.value)
})

const sendMessage = (text) => {
    chatStore.sendMessage(chatType.value, text)
}

// Scroll to bottom when new messages are added
onUpdated(() => {
    if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
})
</script>

<template>
    <div class="chat-container">
        <!-- Header -->
        <header class="chat-header">
            <BackButton backgroundColor="var(--background-primary)" />
            <div class="header-content">
                <ChatIcon class="chat-icon" />
                <h1>{{ data.title }}</h1>
            </div>
        </header>

        <div class="chat-status">
            <!-- <p>posicion actual</p> -->
            <div v-if="connectionError" class="error-message">
                Error de conexión
            </div>
            <div v-else-if="!isConnected" class="connecting-message">
                Conectando...
            </div>
            <div v-else class="connected-message">
                Conectado
            </div>
        </div>

        <!-- Chat Messages -->
        <div class="messages-container" ref="messagesContainer">
            <ChatMessage v-for="(message, index) in messages" :key="index" :message="message" />
        </div>
        <!-- Message Input -->
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