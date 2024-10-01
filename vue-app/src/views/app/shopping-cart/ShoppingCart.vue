<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import TitleSection from '@components/title-section/TitleSection.vue';
import Buy from '@icons/your-shopping-cart/buy.vue';
import NoBuy from '@icons/your-shopping-cart/noBuy.vue';
import BackgroundPattern from '@/components/background-pattern/BackgroundPattern.vue';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import { formatoPesosColombianos } from '@/utils/formatMoney';
import ShoppingCartProduct from './components/ShoppingCartProduct.vue';

const router = useRouter(); 
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const confirmPurchase = () => {
  router.push({ name: 'PurchaseMadeMessage' }); 
  closeModal(); 
};

const shoppingCartStore = useShoppingCartStore();


</script>

<template>
  <BackgroundPattern />
  <main>
    <TitleSection title="Tu carrito de compras" subtitle="Revisa aquí los productos que añadiste a tu carrito" />

    <div class="products">
      <ShoppingCartProduct v-for="product in shoppingCartStore.productsInCart" :product="product"/>
    </div>

    <div class="discount__coupon">
      <p>Añadir cupón de descuento</p>
    </div>

    <div class="order__summary">
      <div class="summary__row">
        <span class="summary__label">Sub total</span>
        <span class="summary__value">S/.90</span>
      </div>
      <div class="summary__row">
        <span class="summary__label">Gastos de envío</span>
        <span class="summary__value">S/.20</span>
      </div>
    </div>

    <div class="summary-row total">
      <span class="summary__label">Total</span>
      <span class="summary__value">S/.110</span>
    </div>

    <div class="buy_products">
      <div class="buy_productsBox">
        <button class="buy__now" @click="openModal">Realizar compra</button>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal-content">
        <h2>¿Seguro de realizar la compra?</h2>
        <div class="modal-buttons">
          <button @click="confirmPurchase" class="modal-button"> 
            <Buy class="modal-icon" />
            Sí
          </button>
          <button @click="closeModal" class="modal-button">
            <NoBuy class="modal-icon" />
            No
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  font-family: Bellota;
  margin-bottom: 8rem;
  color: var(--text-color);
}

.products {
  height: 340px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  margin-block: 1.5rem;

  scrollbar-width: thin;
  scrollbar-color: var(--background-primary);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--background-secondary);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    border: 2px solid var(--background-secondary);
  }
}


.discount__coupon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-secondary);
  color: var(--text-color);
  border-radius: 10px;
  padding: 10px;
  width: 90%;
  max-width: 450px;
  font-size: 1.6rem;
  margin: 1rem auto;
}

.order__summary {
  background-color: var(--background-secondary);
  color: var(--text-color);
  border-radius: 10px;
  padding: 10px 15px;
  width: 90%;
  font-size: 1.6rem;
  margin: 1rem auto;
}

.summary__row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.total {
  background-color: var(--background-secondary);
  padding: 15px;
  color: var(--text-color);
  font-size: 1.6rem;
  width: 90%;
  margin: 1rem auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: var(--background-secondary);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  max-width: 400px;
}

.modal-content h2 {
  color: white;
  margin-bottom: 20px;
  font-size: 2rem;
}

.modal-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.modal-button {
  background-color: var(--background-primary);

  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 45%;

  &:hover {
    background-color: var(--background-secondary);
  }
}

.modal-icon {
  margin-right: 10px;
  width: 24px;
  height: 24px;
}

.buy_products{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5vh;
}

.buy_productsBox{
    display: flex;
    width: 90vw;
    height: 100%;
    justify-content: start;
    align-items: start;
}

.buy__now {
    background-color: var(--background-primary);

    width: 50%;
    height: 100%;
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  
    &:hover {
      background-color: var(--background-secondary);
    }
  }
</style>