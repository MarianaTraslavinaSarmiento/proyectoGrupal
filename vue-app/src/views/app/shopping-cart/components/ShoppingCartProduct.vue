<script setup>
import { formatoPesosColombianos } from '@/utils/formatMoney';
import { ref, computed } from 'vue';
import TrashIcon from '@icons/general/TrashIcon.vue';
import { useShoppingCartStore } from '@/stores/shoppingCart';

const shoppingCartStore = useShoppingCartStore();

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const handleQuantity = (action) => {
    if (action === 'minus' && quantity.value > 1) {
        quantity.value -= 1

    } else if (action === 'plus') {
       quantity.value += 1
    }

    shoppingCartStore.updateProductQuantity(props.product._id, quantity.value)
}

const quantity = ref(1)

const displayDiscountPrice = computed(() => {
    if (props.product.offer && props.product.offer.type == "discount") {
      const discountedPrice = props.product.price * (1 - (props.product.offer.details.discount_percentage || 0) / 100);
      return formatoPesosColombianos(discountedPrice);
    }

});

</script>

<template>
    <div class="product__card">
        <div class="product__image">
          <img :src="product.images_url" alt="Vasija peque a">
        </div>
        <div class="product__info">
          <p class="product__title">{{ product.name }}</p>
          <p v-if="product.offer && product.offer.type == 'discount'" class="product__price">{{ displayDiscountPrice }}</p>
          <p v-else class="product__price">{{ formatoPesosColombianos(product.price) }}</p>
          <p class="product__details">{{ product.size }}, {{ product.weight }}</p>
          <p class="product__origin">{{ product.shop.name }}</p>
          <div class="product__quantity">
            <button class="quantity__btn minus" @click="handleQuantity('minus')">-</button>
            <span class="quantity__value">{{ quantity }}</span>
            <button class="quantity__btn plus" @click="handleQuantity('plus')">+</button>
          </div>
        </div>
        <button class="delete__btn" aria-label="Delete item">
          <TrashIcon class="delete__icon" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
.product__card {
  display: flex;
  background-color: var(--background-secondary);
  color: var(--text-color);
  border-radius: 10px;
  padding: 15px;
  width: 90%;
  max-width: 450px;
  position: relative;

  .product__image {
    flex: 0 0 120px;
    margin-right: 15px;

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
      object-fit: cover;
    }
  }

  .product__info {
    flex: 0.8;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
  }

  .product__title {
    margin: 0 0 2px;
    font-weight: normal;
  }

  .product__price {
    margin: 0 0 2px;
    font-weight: bold;
  }

  .product__details,
  .product__origin {
    margin: 0 0 2px;
  }

  .product__quantity {
    display: flex;
    align-items: center;
    margin-top: 10px;

    .quantity__btn {
      background-color: var(--background-primary);
      color: var(--text-color);
      border: none;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;

      &:hover {
        background-color: var(--background-primary);
      }

      &.minus {
        border-radius: 5px 0px 0px 5px;
      }

      &.plus {
        border-radius: 0px 5px 5px 0px;
      }
    }

    .quantity__value {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--background-base);
      font-size: 1.5rem;
      color: var(--text-black);
    }
  }

  .delete__btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: var(--text-black);
    padding: 0;

    .delete__icon {
      width: 30px;
      height: 30px;
      margin-top: 10px;
    }
  }
}

</style>