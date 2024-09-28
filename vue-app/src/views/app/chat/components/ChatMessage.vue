<!-- ChatMessage.vue -->
<template>
    <div :class="['message-wrapper', message.isSent ? 'sent' : 'received']">
      <div class="message-bubble">
        {{ message.text }}
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .message-wrapper {
    display: flex;
    margin-bottom: 10px;
    position: relative;
  }
  
  .message-bubble {
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 16px;
    line-height: 1.4;
    position: relative;
    font-family: var(--font-bellota);
    font-weight: 600;
    font-size: 2rem;
  }
  
  .message-bubble::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border: 12px solid transparent;
  }
  
  .sent {
    justify-content: flex-end;
  }
  
  .sent .message-bubble {
    background-color: var(--text-contrast);
    color:var(--text-color);
  }
  
  .sent .message-bubble::after {
    right: 0px;
    border-left-color: var(--text-contrast);
    border-right: 0;
    border-bottom: 1;
    margin-bottom: -10px;
    transform: rotate(180deg);
  }
  
  .received {
    justify-content: flex-start;
  }
  
  .received .message-bubble {
    background-color: var(--background-secondary);
    color: var(--text-color);
  }
  
  .received .message-bubble::after {
    left: 0px;
    border-right-color: var(--background-secondary);
    border-left: 0;
    border-bottom: 1;
    margin-bottom: -10px;
    transform: rotate(180deg);
  }
  </style>