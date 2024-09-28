<script setup>
import { ref } from 'vue'
import BackButton from '@components/back-button/BackButton.vue';
import ChatMessage from './components/ChatMessage.vue'
import MessageInput from './components/MessageInput.vue'
import ChatIcon from '@icons/general/ChatIcon.vue';

const messages = ref([])
const data = ref({
    title: 'Chat con servicio al cliente',
})

const sendMessage = (text) => {
    messages.value.push({ text, isSent: true })
    // Here you would typically send the message to a backend
}

</script>

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

        <!-- Chat Messages -->
        <div class="messages-container">
            <ChatMessage :message="{ text: 'Hello!', isSent: true }" />
            <ChatMessage :message="{ text: 'Hi there!', isSent: false }" />
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
            justify-content:center;
            align-items: center;
            position: relative;
            left: -50px;
            width: 100%;
        
            h1{
                font-family: var(--font-bellota);
                font-size: 1.5rem;
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
}

.messages-container {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
}
</style>