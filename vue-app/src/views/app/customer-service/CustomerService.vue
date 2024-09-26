<script setup>
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import Call from "@/assets/icons/app-configuration/CallIcon.vue";
import CommentIcon from '@/assets/icons/general/CommentIcon.vue';
</script>


<template>
  <div class="customer-service">
    <header-title :title="'Atención al cliente'" :hideDiamond="false" />
    
    <div class="frequently-asked-questions">
      <h2>Preguntas frecuentes</h2>
      <button class="question">¿Cómo compro en la app?</button>
      <button class="question">¿Cómo me inscribo en un taller?</button>
      <button class="question">¿Cómo escaneo el QR interactivo?</button>
      <button class="question">¿Cómo cambio la moneda en la app?</button>
      <button class="question">¿Cómo reporto un problema?</button>
    </div>
    
    <div class="personalized-support">
      <p>¿Necesitas atención personalizada? habla con nuestro equipo de soporte</p>
      <button class="chat-button">
        <CommentIcon class="icon" />
        Empieza un chat
      </button>
      <button class="call-button">
        <Call class="icon" />
        Programa una llamada
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .frequently-asked-questions {
      font-family: Bellota;
      margin-top: 20px;
      margin: 50px 30px;
      
      h2 {
        color: var(--color-border);
        margin-bottom: 15px;
        font-size: 1.6rem;
      }
      
      .question {
        background-color: var(--background-secondary);
        color: var(--text-color);
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 5px;
        width: 100%;
        text-align: left;
        border: none;
        font-size: 1.3rem;
        cursor: pointer;
        
        &:hover {
          background-color: var(--background-secondary);
        }
      }
    }
    
    .personalized-support {
      margin-top: 20px;
      font-family: 'Bellota', sans-serif;
      margin: 30px;
      
      p {
        color: var(--color-border);
        margin-bottom: 20px;
        font-size: 1.6rem;
        font-weight: bold;
      }
      
      button {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 15px;
        margin-bottom: 10px;
        border: none;
        border-radius: 5px;
        color: var(--text-color);
        font-weight: bold;
        font-size: 1.3rem;
        cursor: pointer;
        
        .icon {
          margin-right: 10px;
          width: 24px;
          height: 24px;
        }
      }
      
      .chat-button {
        background-color: var(--background-secondary);
        
        &:hover {
          background-color: var(--background-secondary);
        }
      }
      
      .call-button {
        background-color: var(--background-secondary);
        
        &:hover {
          background-color: var(--background-secondary);
        }
      }
    }
</style>
