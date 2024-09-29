<script setup>
import BackButton from '@/components/back-button/BackButton.vue';
import toast from '@/config/toast';
import { computed, reactive } from 'vue';
import { useSignupStore } from '@/stores/signup';
import router from '@/router';

const signupStore = useSignupStore()

const user = reactive({
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    gender: '',
    birth_date: {
        day: '',
        month: '',
        year: ''
    }
})

const emailsDontMatch = computed(() => {
    return user.email !== user.confirmEmail
})

const passwordsDontMatch = computed(() => {
    return user.password !== user.confirmPassword
})

const handleSubmit = (e) => {


    if (emailsDontMatch.value) {
        toast.error('Los correos no coinciden')
        return;
    }

    if (passwordsDontMatch.value) {
        toast.error('Las contraseñas no coinciden')
        return;
    }


    for (const [key, value] of Object.entries(user.birth_date)) {
        if (value < 10) {
            user.birth_date[key] = `0${value}`   
        }
    }

    user.birth_date = Object.values(user.birth_date).join("-")

    signupStore.setUserSignup(user)

    router.replace("/login/terms-and-conditions")    
};



</script>



<template>
    <BackButton style="position: absolute; top: 0;"/>
    <main>
        <form @submit.prevent="handleSubmit">
            <label for="username">Nombre de usuario*</label>
            <p>*Crea un nombre de usuario de mínimo 5 y máximo de 12 carácteres</p>
            <input required type="text" id="username" v-model="user.username" placeholder="" minlength="5" maxlength="12" />

            <label for="email">Correo electrónico*</label>
            <input required type="email" id="email" v-model="user.email" placeholder="" />

            <label for="confirmEmail">Confirma tu correo*</label>
            <input required type="email" id="confirmEmail" v-model="user.confirmEmail" placeholder="" />
            <small v-show="emailsDontMatch">Los correos no coinciden</small>

            <label for="password">Contraseña*</label>
            <p>Recuerda crear una contraseña difícil de adivinar</p>
            <input minlength="6" required type="password" id="password" v-model="user.password" placeholder="" />

            <label for="confirmPassword">Confirma tu contraseña*</label>
            <input minlength="6" required type="password" id="confirmPassword" v-model="user.confirmPassword" placeholder="" />
            <small v-show="passwordsDontMatch">Las contraseñas no coinciden</small>


            <label for="gender">Sexo</label>
            <select required id="gender" v-model="user.gender">
                <option value="" disabled selected></option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="Other">Otro</option>
            </select>

            <label>Fecha de nacimiento</label>
            <div class="birth__date">
                <select required v-model="user.birth_date.day" aria-label="Día">
                    <option value="" disabled selected>DD</option>
                    <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
                </select>

                <select required v-model="user.birth_date.month" aria-label="Mes">
                    <option value="" disabled selected>MM</option>
                    <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
                </select>

                <select required v-model="user.birth_date.year" aria-label="Año">
                    <option value="" disabled selected>YYYY</option>
                    <option v-for="y in 100" :key="y" :value="2013 - y">{{ 2013 - y }}</option>
                </select>
            </div>

            <div class="continue__registration">
                <button type="submit" class="auth__continue">
                    <p>></p><span class="auth__highlight"> Continuar</span>
                </button>
            </div>
        </form>

    </main>
</template>



<style lang="scss" scoped>
main {
    font-family: Bellota;
    font-size: 1.5rem;
}

form {
    display: flex;
    flex-direction: column;
    width: 75vw;
    height: auto;
    margin: auto;
    margin-top: 20px;

    p {
        color: rgb(from var(--text-black) r g b / 50%);
        margin-bottom: 10px;
    }

    label {
        color: black;
        font-size: 1.7rem;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    small {
        font-weight: bold;
        color: red;
        margin-top: 10px;
    }

}

input,
select {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #663300;
    background-color: var(--background-secondary);
    color: #ffffff;
    border-radius: 5px;
    font-size: 1.5rem;
    outline: none;
}

input::placeholder,
select option {
    color: var(--color-accent);
}

select {
    background-color: var(--background-secondary);
    color: var(--color-accent);
    cursor: pointer;
}

option:checked {
    background-color: var(--background-base);
    color: red;
}

.birth__date {
    display: flex;
    gap: 10px;
}

.birth__date select {
    flex: 1;
}


.auth__highlight {
    color: var(--color-border);
    text-decoration: underline;
    font-size: 1.7rem;
}

.continue__registration {
    color: var(--color-accent);
    display: flex;
    flex-direction: row;
    justify-content: end;
    text-decoration: none;
    font-size: 1.6rem;
}

.auth__continue {
    p {
        color: var(--color-accent);
        margin-right: 10px;
    }

    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
}

</style>
