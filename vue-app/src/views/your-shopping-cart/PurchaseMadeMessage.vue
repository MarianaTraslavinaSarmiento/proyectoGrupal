<template>
  <div class="main__container">
    <div class="content">
      <successfulPurchase class="success-icon" />
      <h1 class="title">¡Compra realizada con exito!</h1>
      <div class="diamond-divider">
        <smallTriangles v-for="i in 1" :key="i" />
      </div>
      <p class="message">
        Gracias por apoyar a los artesanos peruanos, puedes revisar tu compra en la opción de 
      </p>
      <button class="btn-purchases">Compras</button>
      <div class="diamond-divider">
        <smallTriangles v-for="i in 1" :key="i" />
      </div>
    </div>
      </div>
    <div class="link-mail">
      <p class="email-message">
        Vincula tu correo para recibir más detalles sobre tus compras realizadas
      </p>
      <input 
        type="email" 
        v-model="email" 
        placeholder="Añadir correo electrónico" 
        class="email-input"
      />
      <button class="btn-return">Regresar al inicio</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import smallTriangles from "@/assets/icons/your-shopping-cart/smallTriangles.vue"
import successfulPurchase from "@/assets/icons/your-shopping-cart/successfulPurchase.vue"

const email = ref('');
</script>

<style scoped>
.main__container {
  position: relative;
  font-family: 'Bellota', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-base);
  overflow: hidden;
  padding: 2rem 0;
}

.content {
  text-align: center;
  width: 100%;
}

.success-icon {
  width: 80%;
  height: 80%;
  margin: 0 auto 1rem;
}

.title {
  color: var(--color-border);
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.diamond-divider {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.diamond-divider :deep(svg) {
  width: 70%;
}

.message {
  font-size: 1.57rem;
  margin-bottom: 1rem;
  color: var(--color-confirmation);
  margin: 0 30px;
  font-weight: bold;
}

.btn-purchases {
  background-color: var(--background-secondary);
  width: 25vw;
  height: 4vh;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.link-mail {
  width: 100%;
  font-family: 'Bellota', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;
}

.email-message {
  text-align: center;
  color: var(--color-confirmation);
  font-size: 1.57rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.email-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid var(--background-secondary);
  border-radius: 4px;
  font-size: 1.6rem;
  background-color: var(--background-secondary);
  color: white;
  margin-top: 3%;
}

.email-input::placeholder {
  color: rgb(from var(--text-color) r g b / 27%);
}

.btn-return {
  background-color: var(--background-secondary);
  color: var(--text-color);
  border: 1px solid var(--background-secondary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.6rem;
  width: 50%;
  margin-top: 5%;
}
</style>