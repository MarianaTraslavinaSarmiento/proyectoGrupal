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
  min-height: 100vh;
  font-family: 'Bellota', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: hidden;
  padding: 3rem;
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
  width: 100%;
}

.success-icon {
  width: 80%;
  height: 80%;
  margin: 0 auto 1rem;
}

.title {
  color: #FFA800;
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
  fill: #8B4513;
}

.message, .email-message {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #8B4513;
}

.email-message {
    display: flex;
    align-items: center;
    justify-content: center;
      width: 100vw;
    color: #8B4513;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    width: 100vw;
    color: #8B4513;
}

.btn-purchases {
    background-color: #8B4513;
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

.link-mail{

  border: 1px solid red;
  width: 100vw;
  padding: 2.5rem;
}

</style>