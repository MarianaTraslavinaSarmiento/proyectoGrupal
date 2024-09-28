<script setup>

import SquareBackground from "@assets/img/general/SquareBackground.vue"
import Back from "@assets/img/general/Back.vue"
import { reactive } from "vue";
import axios from "axios";
import router from "@/router";

const user = reactive({
    login: '',
    password: ''
})

const handleUserAuth = async () => {
    try{
        const res = await axios.post('http://localhost:3000/api/auth/login', user)
        console.log(res);

    if(res.status == 200){
        router.push('/workshops-craft-stores')
    }

    }catch(err){
        console.error(err)
        alert('Error al iniciar sesión. Por favor verifica tu información.')
    }
}
</script>

<template>
    <main>
        <SquareBackground class="triangle__corner__right" />
        <SquareBackground class="triangle__corner__left" />
        <div class="back">
            <Back class="back__icon" />
        </div>
        <div class="login__form">
            <label for="username" class="login__label">Nombre de usuario, celular o correo</label>
            <input type="text" id="username" class="box__input" v-model="user.login"/>

            <label for="password" class="login__label">Contraseña</label>
            <input type="password" id="password" class="box__input" v-model="user.password"/>

            <div class="login__form__links">
                <a href="#" class="login__form__link" @click="handleUserAuth">Iniciar sesión</a>
                <a href="#" class="login__form__link">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    font-family: Bellota;
}

.back {
    position: absolute;

    .back__icon {
        width: 50px;
        cursor: pointer;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 80px;
    }
}

.triangle__corner__left {
    position: absolute;
    left: 53%;
    top: 100%;
    transform: translate(-100%, -50%);
    width: 450px;
    height: 450px;
    z-index: -1;
}

.triangle__corner__right {
    position: absolute;
    top: 0;
    right: 0;
    left: 230px;
    transform: translateY(-50%);
    width: 400px;
    height: 400px;
    z-index: -1;

}

.login__form {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: Bellota;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    padding-inline: 5rem;


    .login__label {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: bold;
        color: var(--background-primary)
    }

    .box__input {
        width: 100%;
        padding: 12px;
        margin-bottom: 16px;
        border: none;
        border-radius: 8px;
        background-color: var(--background-secondary);
        color: var(--text-color);
        font-size: 16px;

    }

    &__links {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-block: 2rem;
    }

    &__link {
        font-size: 16px;
        text-decoration: none;
        margin: 8px 0;
        color: var(--text-contrast);
        text-decoration: underline;

    }
}
</style>