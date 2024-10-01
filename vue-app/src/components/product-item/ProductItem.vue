<script setup>
import { computed } from 'vue';
import DiscountIcon from '@/assets/icons/general/DiscountIcon.vue';
import DeleteIcon from '@/assets/icons/general/DeleteIcon.vue';
import { formatoPesosColombianos } from '@/utils/formatMoney';

const props = defineProps({
    showDelete: {
        type: Boolean,
        default: false
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productCompany: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    offer: {
        type: Object,
        required: false
    }
});

const showOffer = computed(() => props.offer?.type);
const isDiscountOffer = computed(() => props.offer?.type === 'discount');
const isBuyXGetYOffer = computed(() => props.offer?.type === 'buyxgety');
const isFreeShippingOffer = computed(() => props.offer?.type === 'freeshipping');

const offerText = computed(() => {
    if (isFreeShippingOffer.value) return 'Envío gratis';
    if (isBuyXGetYOffer.value) return `${props.offer?.details.buyX}x${props.offer.details?.getY}`;
    if (isDiscountOffer.value) return `-${props.offer?.details.discount_percentage}%`;
});

const displayPrice = computed(() => {
    const discountedPrice = props.productPrice * (1 - (props.offer?.details?.discount_percentage || 0) / 100);
    return formatoPesosColombianos(discountedPrice);
});

</script>

<template>
    <div class="product__container">
        <div v-if="showOffer" :class="['discount__icon', { 'bottom-right': !isDiscountOffer }]">
            <DiscountIcon />
        </div>

        <p v-if="showOffer" :class="['discount__text', { 'bottom-right': !isDiscountOffer, 'free-shipping': isFreeShippingOffer }]">
            {{ offerText }}
        </p>

        <div v-if="showDelete" class="delete__icon">
            <DeleteIcon />
        </div>

        <div class="product">
            <img :src="imageUrl" :alt="productName" />
            <div class="product__info">
                <h4 class="product__name">{{ productName }}</h4>
                <div class="product__pricing">
                    <p v-if="isDiscountOffer" class="product__original-price">
                        {{ formatoPesosColombianos(productPrice) }}
                    </p>
                    <p class="product__price">{{ displayPrice }}</p>
                </div>
                <p class="product__company">{{ productCompany }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product__container {
    position: relative;


    .discount__text {
        position: absolute;
        transform: rotate(30deg);
        left: -14px;
        top: -2px;
        font-size: 1.5rem;
        color: var(--color-text);
        padding: 3px 5px;
        font-weight: bold;

        &.bottom-right {
            left: auto;
            right: -8px;
            top: auto;
            font-size: 1.5rem;
            bottom: 83px;
            transform: rotate(-30deg); 
        }

        &.free-shipping {
            font-size: 1.1rem;
            width: 50px;
            right: -22px;

        }
    }

    .discount__icon {
        position: absolute;
        transform: translateY(-30%);
        left: -20px;
        width: 50px;
        height: 50px;
        filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.30));

        &.bottom-right {
            right: -17px;
            top: auto;
            left: auto;
            bottom: 70px;
            transform: none;
        }
    }

    .delete__icon {
        position: absolute;
        transform: translateY(-30%);
        top: 5px;
        right: -7px;
        width: 20px;
        height: 20px;
        z-index: 2;
    }

    .product {
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;


        img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
            border: 1px solid rgb(from var(--background-tertiary) r g b / 10%)
        }

        .product__info {
            padding: 10px;
            flex-grow: 1;
            display: flex;
            font-size: 12px;
            background-color: var(--background-secondary);
            flex-direction: column;
            padding-block: 1.5rem;


            .product__name {
                font-weight: bold;
                margin: 0 0 0 0;
                line-height: 1.2;
                font-size: 14px;
            }

            .product__price {
                font-weight: bold;
                margin: 0;
            }

            .product__original-price {
                text-decoration: line-through;
                text-decoration-color: var(--color-accent);

            }
        }
    }
}
</style>