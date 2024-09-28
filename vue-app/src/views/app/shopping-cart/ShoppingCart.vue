<script setup>

import TitleSection from '@components/title-section/TitleSection.vue';
import TrashIcon from '@icons/general/TrashIcon.vue';

/** !Note: This is just the HTML and CSS, not the logic, because its neccesary to save the name of the products in global state or pinia... */
</script>

<template>

    <main>

        <TitleSection title="Tu carrito de compras" subtitle="Revisa aquí los productos que añadiste a tu carrito" />


        <div class="products">

            <div class="product__card">
                <div class="product__image">
                    <img src="" alt="">
                </div>
                <div class="product__info">
                    <p class="product__title">Vasija pequeña con</p>
                    <p class="product__price">S/.50</p>
                    <p class="product__details">13x10 cm, 2 KG</p>
                    <p class="product__origin">Asoc. de artesanos productores de Chazuta</p>
                    <div class="product__quantity">
                        <button class="quantity__btn minus">-</button>
                        <span class="quantity__value">1</span>
                        <button class="quantity__btn plus">+</button>
                    </div>
                </div>
                <button class="delete__btn" aria-label="Delete item">
                    <TrashIcon class="delete__icon" />
                </button>
            </div>

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

        <button class="buy__now">Realizar compra</button>


    </main>


</template>

<style lang="scss" scoped>
main {
    font-family: Bellota;
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
    scrollbar-color: var(--background-primary) #8B4513;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #8B4513;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        border: 2px solid #8B4513;
    }
}

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
                border-right: 2px solid var(--background-base);
            }

            &.plus {
                border-radius: 0px 5px 5px 0px;
                border-left: 2px solid var(--background-base);
            }
        }

        .quantity__value {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--background-primary);
            font-size: 1.5rem;

        }
    }

    .delete__btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        color: var(--text-color);
        padding: 0;

        .delete__icon {
            width: 30px;
            height: 30px;
            margin-top: 10px;
        }
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
    margin-inline: 2rem;
}

.order__summary {
  background-color: var(--background-secondary);
  color: var(--text-color);
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  width: 90%;
  font-size: 1.6rem;
  margin: 50px 20px 0px 20px
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
    margin: 10px 20px 0;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
}

.buy__now {
    width: 35%;
    background-color: var(--background-primary);
    margin: 10px 20px 0px;
    height: 40px;
    padding: 15px;
    color: var(--text-color);
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    align-items: center;
    border-radius: 10px;
}

</style>