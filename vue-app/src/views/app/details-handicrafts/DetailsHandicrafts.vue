<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useGetOneProduct, useAddToFavorites } from '@/composables/useProduct';
import { useShoppingCartStore } from '@/stores/shoppingCart.js';
import { useUserStore } from '@/stores/user';
import { formatoPesosColombianos } from '@/utils/formatMoney';
import BackButton from '@/components/back-button/BackButton.vue';
import Promotion from '@/assets/icons/your-shopping-cart/promotion.vue';
import TitleHandicrafts from '@/components/title-handicrafts/TitleHandicrafts.vue';
import HeartIcon from '@/assets/icons/details-handicrafts/HeartIcon.vue';
import HeartFilledIcon from '@/assets/icons/details-handicrafts/HeartFilledIcon.vue';
import ShoppingCartIcon from '@/assets/icons/nav/ShoppingCartIcon.vue';
import SuccessfulPurchaseIcon from '@/assets/icons/details-handicrafts/SuccessfulPurchaseIcon.vue';
import LoadingScreen from '@/components/loading-screen/LoadingScreen.vue';

const route = useRoute();
const { product, isLoading } = useGetOneProduct(route.params.id);
const userStore = useUserStore();
const shoppingCartStore = useShoppingCartStore();

const isFavorite = computed(() => {
  if (!userStore.user || !userStore.user.favorites || !product.value) {
    return false;
  }
  return userStore.user.favorites.includes(product.value._id);
});

const toggleFavorite = () => {
  if (!isFavorite.value && product.value) {
    useAddToFavorites(product.value._id);
  }
};

const displayPrice = computed(() => {
  if (!product.value) return '';
  if (product.value.offer?.type === 'discount') {
    const discountedPrice = product.value.price * (1 - (product.value.offer.details.discount_percentage || 0) / 100);
    return formatoPesosColombianos(discountedPrice);
  }
  return formatoPesosColombianos(product.value.price);
});

const displayOriginalPrice = computed(() => {
  if (!product.value) return '';
  if (product.value.offer?.type === 'discount') {
    return formatoPesosColombianos(product.value.price);
  }
  return '';
});

const offerText = computed(() => {
  if (!product.value?.offer) return '';
  
  switch (product.value.offer.type) {
    case 'discount':
      return `-${product.value.offer.details.discount_percentage}%`;
    case 'buyxgety':
      return `${product.value.offer.details.buyX}x${product.value.offer.details.getY}`;
    case 'freeshipping':
      return 'Envío gratis';
    default:
      return '';
  }
});

const addToCart = () => {
  if (product.value) {
    shoppingCartStore.addProductToCart({...product.value});
  }
};

const deleteFromCart = () => {
  if (product.value) {
    shoppingCartStore.removeProductFromCart(product.value._id);
  }
};

const productAlreadyInCart = computed(() => {
  if (!product.value) return false;
  return shoppingCartStore.productsInCart.find(productInCart => productInCart._id === product.value._id);
});
</script>

<template>
  <BackButton />
  <main v-if="isLoading">
    <LoadingScreen style="min-height: 60dvh;"/>
  </main>
  <main v-else-if="product">
    <div class="handicraft__img">
    <img :src="product.images_url" :alt="product.name">
    <div v-if="product.offer" class="offer-badge">
      <Promotion />
      <span>{{ offerText }}</span>
    </div>
  </div>

    <TitleHandicrafts :title="product.name" />

    <div class="product__card">
      <div class="product__header">
        <div class="product__price">
          <span v-if="displayOriginalPrice" class="product__price__original">{{ displayOriginalPrice }}</span>
          <span class="product__price__discounted">{{ displayPrice }}</span>
        </div>
        <button @click="toggleFavorite" class="product__favorite__btn" aria-label="Add to favorites">
          <HeartIcon v-if="!isFavorite" class="product__favorite__icon" />
          <HeartFilledIcon v-else class="product__favorite__icon" />
        </button>
      </div>
      <h2 class="product__artisan">{{ product.shop.name }}</h2>
      <p class="product__dimensions"><strong>Dimensiones:</strong> {{ product.size }}</p>
      <p class="product__description"><strong>Descripción:</strong> {{ product.description }}</p>
      <p class="product__shipping">
        <SuccessfulPurchaseIcon class="product__shipping__icon" />
        {{ product.offer?.type === 'freeshipping' ? 'Envío gratis' : 'Cuenta con envío hacia tu ubicación' }}
      </p>
      <button @click="deleteFromCart" v-if="productAlreadyInCart" class="product__cart__btn remove">
        <ShoppingCartIcon class="shopping__cart__icon" />
        Quitar del carrito de compras
      </button>
      <button v-else @click="addToCart" class="product__cart__btn add">
        <ShoppingCartIcon class="shopping__cart__icon" />
        Añadir a mi carrito de compras
      </button>
    </div>
  </main>
  <main v-else>
    <p>No se pudo cargar el producto.</p>
  </main>
</template>

<style lang="scss" scoped>
main {
  font-family: Bellota;
}

.handicraft__img {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .offer-badge {
    position: absolute;
    bottom: 10px;  
    left: 10px;    
    color: white;
    padding: 5px 10px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 160px;
    
    svg {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-top: 70px;
    }

    span {
        position: relative;
        position: relative;
        z-index: 1;
        margin-top: 70px;
        width: 10vw;
        display: flex;
        align-items: center;
        // border: 1px solid red;
        justify-content: center;
        text-align: center;
        font-size: 1.8rem;
    }
  }
}

.product__card {
    padding: 20px;
    border-radius: 8px;
    color: var(--text-black);
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;


    .product__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;

        .product__price {
            &__original {
                text-decoration: line-through;
                color: var(--text-contrast);
                margin-right: 5px;
                text-decoration-color: var(--color-accent);
            }

            &__discounted {
                font-weight: bold;
                color: var(--text-contrast);
            }
        }

        .product__favorite__btn {
            background: none;
            border: none;
            cursor: pointer;
            color: var(--color-accent);
            position: relative;

            .product__favorite__icon {
                width: 50px;
                height: 50px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-90%, -30%);
                transition: transform 0.2s ease; 

                &:hover {
                    transform: translate(-90%, -30%) scale(1.1); 
                }
            }
        }
    }

    .product__artisan {
        font-size: 18px;
        color: var(--text-contrast);
        margin-bottom: 10px;
    }

    .product__dimensions,
    .product__description {
        margin-bottom: 10px;
        line-height: 1.4;
    }

    .product__shipping {
        display: flex;
        align-items: center;
        color: var(--text-black);
        margin-bottom: 50px;
        margin-top: 30px;


        &__icon {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
    }

    .product__cart__btn {
        width: 80%;
        padding: 10px;
        background-color: var(--background-secondary);
        color: var(--text-color);
        border: none;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        margin: 0 auto;

        .shopping__cart__icon {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }

    }
}
</style>