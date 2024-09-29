<script setup>
import DiscountIcon from '@/assets/icons/general/DiscountIcon.vue';
import DeleteIcon from '@/assets/icons/general/DeleteIcon.vue';

const props = defineProps({
    showDiscount: {
        type: Boolean,
        default: true
    },
    showDelete: {
        type: Boolean,
        default: true
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
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
    discountPercentage: {
        type: String,
        default: 0
    }
});


</script>

<template>

    <div class="product__container">

        <div v-if="showDiscount" class="discount__icon">
            <DiscountIcon />
        </div>

        <p class="discount__text">3x1</p>

        <div v-if="showDelete" class="delete__icon">
            <DeleteIcon />
        </div>

        <div class="product">

            <img :src="imageUrl" :alt=" productName" />
            <div class="product__info">
                <h4 class="product__name">{{ productName }}</h4>
                <p class="product__price">{{ productPrice }}</p>
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
        left: -15px;
        z-index: 3;
        top: -3px;
        font-size: 1.5rem;
        color: var(--text-color);
        padding: 3px 10px;
    }

    .discount__icon {

        position: absolute;
        transform: translateY(-30%);
        left: -20px;
        width: 50px;
        height: 50px;
        z-index: 2;
        filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.30));
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
            justify-content: space-between;
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
        }
    }
}
</style>