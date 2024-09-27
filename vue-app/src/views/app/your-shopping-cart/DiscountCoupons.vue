<script setup>
import { ref } from 'vue';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import DiscountCoupons from "@/assets/icons/your-shopping-cart/couponMenu.vue";

const couponCode = ref('');

const validateCoupon = () => {

  console.log('Validating coupon:', couponCode.value);
};

const useCoupon = () => {

  console.log('Using coupon');
};


const coupons = ref([
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1690214141978-3a038a437dec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0aXRvJTIwZW4lMjBsYSUyMGNhbWF8ZW58MHx8MHx8fDA%3D",
    discount: "50% de descuento en cartucheras del Taller Awaq Ayllus",
    expiry: "4/9/23"
  },
  // Add more coupons here for demonstration
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1690214141978-3a038a437dec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0aXRvJTIwZW4lMjBsYSUyMGNhbWF8ZW58MHx8MHx8fDA%3D",
    discount: "25% de descuento en tejidos del Taller Inca",
    expiry: "15/9/23"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1690214141978-3a038a437dec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0aXRvJTIwZW4lMjBsYSUyMGNhbWF8ZW58MHx8MHx8fDA%3D",
    discount: "10% de descuento en cerámicas del Taller Cusco",
    expiry: "30/9/23"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1690214141978-3a038a437dec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0aXRvJTIwZW4lMjBsYSUyMGNhbWF8ZW58MHx8MHx8fDA%3D",
    discount: "10% de descuento en cerámicas del Taller Cusco",
    expiry: "30/9/23"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1690214141978-3a038a437dec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0aXRvJTIwZW4lMjBsYSUyMGNhbWF8ZW58MHx8MHx8fDA%3D",
    discount: "10% de descuento en cerámicas del Taller Cusco",
    expiry: "30/9/23"
  }
]);
</script>

<template>
  <div class="customer-service">
    <header-title :title="'Canjear Cupon'" :hideDiamond="false" />
    
    <div class="content">
      <h2 class="question">¿Cuentas con algún cupón de descuento?</h2>
      <p class="subtext">Canjealo aquí</p>
      
      <div class="coupon-input">
        <DiscountCoupons class="coupon-icon" />
        <input v-model="couponCode" type="text" placeholder="Ingresa tu cupón" />
        <button @click="validateCoupon">Validar</button>
      </div>
      
      <div class="active-coupons">
        <h3>Cupones vigentes</h3>
        <p class="expiry-note">*Usar antes de la fecha de vencimiento</p>
        
        <div class="coupon-container">
          <div v-for="coupon in coupons" :key="coupon.id" class="coupon-card">
            <img :src="coupon.image" alt="Coupon Image" class="coupon-image" />
            <div class="coupon-details">
              <p class="discount">{{ coupon.discount }}</p>
              <p class="expiry">Fecha de vencimiento: {{ coupon.expiry }}</p>
              <button @click="useCoupon" class="use-coupon">Usar cupón</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.customer-service {
  font-family: Bellota;
  color: var(--text-contrast);
  height: 100vh;
  display: flex;
  flex-direction: column;
}

h2 {
    font-size: 2rem;
}

.subtext {
    font-size: 2rem;
    font-weight: bold;
}
.content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.question {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.subtext {
  font-size: 16px;
  margin-bottom: 20px;
}

.coupon-input {
  display: flex;
  align-items: center;
  background-color: var(--background-secondary);
  border-radius: 10px;
  padding: 5px 15px;
  margin-bottom: 30px;

  .coupon-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    color: rgb(from var(--text-color) r g b /25%);
    font-size: 16px;
    padding: 10px 0;

    &::placeholder {
        color: rgb(from var(--text-color) r g b /25%);
    }
  }

  button {
    background-color: var(--background-primary);
    color: var(--text-color);
    border: none;
    border-radius: 10px;
    padding: 8px 15px;
    font-size: 14px;
    cursor: pointer;
  }
}

.active-coupons {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .expiry-note {
    color: rgb(from var(--text-contrast) r g b /50%);
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: bold;
  }
}

.coupon-container {
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 10px; 
  height: 20px;
  scrollbar-width: none;
}

.coupon-card {
  background-color: var(--background-secondary);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  margin-bottom: 20px;

  .coupon-image {
    width: 35vw;
    object-fit: cover;
  }

  .coupon-details {
    padding: 15px;
    flex-grow: 1;

    .discount {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 1.3rem;
      color: var(--text-color);
    }

    .expiry {
      font-size: 14px;
      color: var(--text-color);
      margin-bottom: 10px;
      font-weight: bold;
    }

    .use-coupon {
      background-color: var(--background-primary);
      color: var(--text-color);
      border: none;
      border-radius: 10px;
      padding: 8px 15px;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>