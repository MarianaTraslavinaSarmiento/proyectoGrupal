<script setup>
import { ref } from 'vue';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import CouponIcon from "@icons/general/CouponIcon.vue";
import { useValidateCoupon, useGetAllCoupons } from '@/composables/useCoupon';
import LoadingScreen from '@/components/loading-screen/LoadingScreen.vue';
import { useShoppingCartStore } from '@/stores/shoppingCart';
import router from '@/router';

const couponCode = ref('');
const validCoupons = ref([]);
const validateCoupon = async () => {
  if (!couponCode.value) return;
  const validCoupon = await useValidateCoupon(couponCode.value);
  if (validCoupon) {
    validCoupons.value.push(validCoupon);
    couponCode.value = '';
  }
};

const { coupons, isLoading } = useGetAllCoupons()

const shoppingCartStore = useShoppingCartStore();
const useCoupon = (coupon) => {
  shoppingCartStore.setCurrentCoupon(coupon)
  router.push('/app/shopping-cart')
};


</script>

<template>

  <div class="customer-service">
    <HeaderTitle :title="'Canjear Cupon'" :hideDiamond="false" />
    
    <div v-if="isLoading">
      <LoadingScreen style="min-height: 60dvh;" />
    </div>
    <div v-else class="content">
      <h2 class="question">¿Cuentas con algún cupón de descuento?</h2>
      <p class="subtext">Canjealo aquí</p>
      
      <div class="coupon-input">
        <CouponIcon class="coupon-icon" />
        <input v-model="couponCode" type="text" placeholder="Ingresa tu cupón" />
        <button @click="validateCoupon" :disabled="!couponCode">Validar</button>
      </div>
      <div class="active-coupons">
        <h3>Cupones vigentes</h3>
        <p class="expiry-note">*Usar antes de la fecha de vencimiento</p>
        
        <div class="coupon-container">
          <div v-for="coupon in [...coupons, ...validCoupons]" :key="coupon.id" class="coupon-card">
            <img :src="coupon.image_url" alt="Coupon Image" class="coupon-image" />
            <div class="coupon-details">
              <p class="discount">{{ coupon.description }}</p>
              <p class="expiry">Fecha de vencimiento: {{ new Date(coupon.expiry_date).toLocaleDateString() }}</p>
              <button v-if="!coupon.used" @click="useCoupon(coupon)" class="use-coupon">Usar cupón</button>
            <button v-else disabled class="use-coupon">Cupon usado 😥</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.customer-service {
  font-family: var(--font-bellota);
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
    color: var(--text-color);
  }

  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    color: var(--text-color);
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