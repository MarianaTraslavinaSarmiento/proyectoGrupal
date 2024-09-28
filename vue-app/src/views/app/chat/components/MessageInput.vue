<script setup>
import SendIcon from '@icons/chat/SendIcon.vue';
import { ref } from 'vue'

const messageText = ref('')
const emit = defineEmits(['send'])

const sendMessage = () => {
    if (messageText.value.trim()) {
        emit('send', messageText.value)
        messageText.value = ''
    }
}
</script>

<template>
    <div class="input-container">
        <form @submit.prevent="sendMessage" class="input-form">
            <input v-model="messageText" type="text" placeholder="Mandar mensaje " class="message-input" />
            <button type="submit" class="send-button">
                <SendIcon />
            </button>
        </form>
    </div>
</template>

<style scoped>
.input-container {
    padding: 1rem;

    .input-form {
        display: flex;

        .message-input {
            font-family: var(--font-bellota);
            font-size: 1.5rem;
            padding: 1rem 0 1rem 1.5rem;
            flex: 1;
            border: none;
            border-radius: 4px 0 0 4px;
            background-color: var(--background-secondary);
            color: var(--text-color);

            &:placeholder {
                color: rgb(from var(--text-color) r g b / 60%);
            }

        }

        .send-button {
            color: var(--text-color);
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--background-secondary);
            padding:0.25em 1em 0 0.5em;
            border: none;
            cursor: pointer;
            border-radius: 0 4px 4px 0;
            z-index: 3;
            width: 40px;
        }
    }
}
</style>