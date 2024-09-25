<template>
  <div class="main__container">
    <smallTriangles class="triangle__top" />
    <smallTriangles class="triangle__bottom" />
    
    <div class="content">
      <successfulPurchase class="success-icon" />
      <h1 class="title">¡Compra realizada con exito!</h1>
      <div class="diamond-divider"></div>
      <p class="message">
        Gracias por apoyar a los artesanos peruanos, puedes revisar tu compra en la opción de
      </p>
      <button class="btn-purchases">Compras</button>
      <div class="diamond-divider"></div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import smallTriangles from "@assets/icons/your-shopping-cart/smallTriangles.vue"
import successfulPurchase from "@assets/icons/your-shopping-cart/successfulPurchase.vue"

const email = ref('');
</script>

<style scoped>
.main__container {
  position: relative;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2rem;
  overflow: hidden;
}

.triangle__top, .triangle__bottom {
  position: absolute;
  z-index: -1;
}

.triangle__top {
  top: -100px;
  right: -100px;
  transform: rotate(45deg);
}

.triangle__bottom {
  bottom: -100px;
  left: -100px;
  transform: rotate(225deg);
}

.content {
  text-align: center;
  max-width: 300px;
  width: 100%;
}

.success-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
}

.title {
  color: #FFA800;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.diamond-divider {
  height: 10px;
  background-image: url('@assets/icons/your-shopping-cart/smallTriangles.vue');
  background-repeat: repeat-x;
  background-size: contain;
  margin: 1rem 0;
}

.message, .email-message {
  color: #8B4513;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.btn-purchases {
  background-color: #8B4513;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.email-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #8B4513;
  border-radius: 4px;
  font-size: 0.9rem;
}

.btn-return {
  background-color: white;
  color: #8B4513;
  border: 1px solid #8B4513;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  width: 100%;
}
</style>