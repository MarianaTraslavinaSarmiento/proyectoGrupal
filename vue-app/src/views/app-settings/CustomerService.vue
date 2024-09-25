<script setup>
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import Call from "@/assets/icons/app-configuration/call.vue";
import commentsMenu from "@/assets/icons/app-configuration/commentsMenu.vue";
</script>


<template>
    <div class="atencion-cliente">
      <header-title :title="'Atención al cliente'" :hideDiamond="false" />
      
      <div class="preguntas-frecuentes">
        <h2>Preguntas frecuentes</h2>
        <button class="pregunta">¿Cómo compro en la app?</button>
        <button class="pregunta">¿Cómo me inscribo en un taller?</button>
        <button class="pregunta">¿Cómo escaneo el QR interactivo?</button>
        <button class="pregunta">¿Cómo cambio la moneda en la app?</button>
        <button class="pregunta">¿Cómo reporto un problema?</button>
      </div>
      
      <div class="atencion-personalizada">
        <p>¿Necesitas atención personalizada? habla con nuestro equipo de soporte</p>
        <button class="chat-button">
          <commentsMenu class="icon" />
          Empieza un chat
        </button>
        <button class="llamada-button">
          <Call class="icon" />
          Programa una llamada
        </button>
      </div>
    </div>
  </template>
  
  
  <style scoped lang="scss">
    .preguntas-frecuentes {
        font-family: Bellota;
        margin-top: 20px;
        margin: 50px 30px;
        
        h2 {
          color: #8b0000;
          margin-bottom: 10px;
          font-size: 1.6rem;
        }
        
        .pregunta {
          background-color: #8b4513;
          color: white;
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 5px;
          width: 100%;
          text-align: left;
          border: none;
          font-size: 1.3rem;
          cursor: pointer;
          
          &:hover {
            background-color: #a0522d;
          }
        }
      }
      
      .atencion-personalizada {
        margin-top: 20px;
        font-family: 'Bellota', sans-serif;
        margin: 30px;
        
        p {
          color: #8b0000;
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
          color: white;
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
          background-color: #8b4513;
          
          &:hover {
            background-color: #a0522d;
          }
        }
        
        .llamada-button {
          background-color: #8b0000;
          
          &:hover {
            background-color: #a52a2a;
          }
        }
      }
</style>