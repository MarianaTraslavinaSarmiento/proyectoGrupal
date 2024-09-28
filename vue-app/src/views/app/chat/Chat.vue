<template>
    <div class="chat-container">
        <!-- Header -->
         <header class="chat-header">
             <BackButton  backgroundColor="var(--background-primary)" />
             <div class="header-content">
                 <ChatIcon class="chat-icon" />
                 <h1>{{ data.title }}</h1>
             </div>
         </header>

        <div class="chat-status">
            <p>posicion actual</p>
        </div>

        <!-- Chat Messages -->
        <div class="messages-container" ref="messagesContainer">
            <ChatMessage 
                v-for="(message, index) in messages" 
                :key="index"
                :message="message" 
            />
        </div>
        <!-- Message Input -->
        <MessageInput @send="sendMessage" />
    </div>
</template>

<script setup>
import { ref, onUpdated } from 'vue'
import BackButton from '@components/back-button/BackButton.vue';
import ChatMessage from './components/ChatMessage.vue'
import MessageInput from './components/MessageInput.vue'
import ChatIcon from '@icons/general/ChatIcon.vue';

const messages = ref([])
const messagesContainer = ref(null)
const data = ref({
    title: 'Chat con servicio al cliente',
})

const sendMessage = (text) => {
    messages.value.push({ text, isSent: true })
    // Here you would typically send the message to a backend
}

// Scroll to bottom when new messages are added
onUpdated(() => {
    if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
})
</script>

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
            justify-content:center;
            align-items: center;
            position: relative;
            left: -50px;
            width: 100%;
        
            h1{
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