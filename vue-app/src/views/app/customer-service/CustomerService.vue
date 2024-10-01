<script setup>
import { ref } from 'vue';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import Call from "@/assets/icons/app-configuration/CallIcon.vue";
import CommentIcon from '@/assets/icons/general/CommentIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const onChatClick = () => {
  router.push('/app/atencion-al-cliente/chat')
}

const onCallClick = () => {
  window.open('https://forms.gle/yJH5z94kcpHgexa8A', '_blank');
}

const faqs = ref([
  { 
    question: "¿Cómo compro en la app?", 
    answer: "Para comprar en la app, sigue estos pasos: 1. Inicia sesión. 2. Navega al catálogo de productos. 3. Selecciona el producto deseado. 4. Añádelo al carrito. 5. Procede al pago y sigue las instrucciones.",
    isOpen: false
  },
  { 
    question: "¿Cómo me inscribo en un taller?", 
    answer: "Para inscribirte en un taller: 1. Ve a la sección 'Talleres'. 2. Elige el taller que te interese. 3. Haz clic en 'Inscribirse'. 4. Completa el formulario y confirma tu inscripción.",
    isOpen: false
  },
  { 
    question: "¿Cómo escaneo el QR interactivo?", 
    answer: "Para escanear el QR interactivo: 1. Abre la app. 2. Pulsa el botón 'Escanear QR'. 3. Apunta la cámara al código QR. 4. La app reconocerá automáticamente el código y te mostrará la información.",
    isOpen: false
  },
  { 
    question: "¿Cómo cambio la moneda en la app?", 
    answer: "Para cambiar la moneda: 1. Ve a 'Configuración'. 2. Selecciona 'Preferencias de moneda'. 3. Elige tu moneda preferida de la lista. 4. Guarda los cambios.",
    isOpen: false
  },
  { 
    question: "¿Cómo reporto un problema?", 
    answer: "Para reportar un problema: 1. Ve a 'Soporte' en el menú. 2. Selecciona 'Reportar un problema'. 3. Describe el issue en detalle. 4. Adjunta capturas de pantalla si es necesario. 5. Envía el reporte.",
    isOpen: false
  }
]);

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
}

</script>

<template>
  <div class="customer-service">
    <header-title :title="'Atención al cliente'" :hideDiamond="false" />
    
    <div class="frequently-asked-questions">
      <h2>Preguntas frecuentes</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button @click="toggleFaq(index)" class="question">
          {{ faq.question }}
        </button>
        <div v-if="faq.isOpen" class="answer">
          {{ faq.answer }}
        </div>
      </div>
    </div>
    
    <div class="personalized-support">
      <p>¿Necesitas atención personalizada? habla con nuestro equipo de soporte</p>
      <button @click="onChatClick" class="chat-button">
        <CommentIcon class="icon" />
        Empieza un chat
      </button>
      <button @click="onCallClick" class="call-button">
        <Call class="icon" />
        Programa una llamada
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .frequently-asked-questions {
    font-family: Bellota;
    margin: 50px 30px;
    
    h2 {
      color: var(--color-border);
      margin-bottom: 15px;
      font-size: 1.6rem;
    }
    
    .faq-item {
      margin-bottom: 15px;
    }
    
    .question {
      background-color: var(--background-secondary);
      color: var(--text-color);
      padding: 15px;
      border-radius: 5px;
      width: 100%;
      text-align: left;
      border: none;
      font-size: 1.3rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      
    }
    
    .answer {
      background-color: var(--background-secondary);
      color: var(--text-color);
      padding: 15px;
      border-radius: 0 0 5px 5px;
      font-size: 1.1rem;
      margin-top: 2px;
    } 
  }
    
  .personalized-support {
    margin: 30px;
    font-family: 'Bellota', sans-serif;
    
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
      transition: background-color 0.3s ease;
      
      .icon {
        margin-right: 10px;
        width: 24px;
        height: 24px;
      }
    }
    
    .chat-button, .call-button {
      background-color: var(--background-secondary);
    
    }
  }
</style>
