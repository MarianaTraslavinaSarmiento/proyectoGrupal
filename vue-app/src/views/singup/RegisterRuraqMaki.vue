<script setup>
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const confirmEmail = ref('');
const password = ref('');
const confirmPassword = ref('');
const gender = ref('');
const birthDate = {
  day: ref(''),
  month: ref(''),
  year: ref('')
};

const handleSubmit = () => {

  console.log('Form submitted');
};



import CheckedIcon from "@/assets/icons/general/CheckedIcon.vue";
import BackIcon from '@icons/general/BackIcon.vue'

</script>



<template>
    <main class="main__container">


        <div class="start__registration">
            <div class="back__icon">
                <router-link to="/signup">
                    <div class="back">
                        <BackIcon class="back__icon" />
                    </div>
                </router-link>
            </div>
            <div class="information__user">
                <div class="all__information">
                    <label for="username">Nombre de usuario*</label>
                    <p>*Crea un nombre de usuario de mínimo 5 y máximo de 12 carácteres </p>
                    <input type="text" id="username" v-model="username" placeholder="" maxlength="12" />

                    <label for="email">Correo electrónico*</label>
                    <input type="email" id="email" v-model="email" placeholder="" />

                    <label for="confirmEmail">Confirma tu correo*</label>
                    <input type="email" id="confirmEmail" v-model="confirmEmail" placeholder="" />

                    <label for="password">Contraseña*</label>
                    <input type="password" id="password" v-model="password" placeholder="" />

                    <label for="confirmPassword">Confirma tu contraseña*</label>
                    <p>Recuerda crear una contraseña difícil de adivinar</p>
                    <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="" />

                    <label for="gender">Sexo</label>
                    <select id="gender" v-model="gender">
                        <option value="" disabled selected></option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Otro</option>
                    </select>

                    <label>Fecha de nacimiento</label>
                    <div class="birth__date">
                        <select v-model="birthDate.day" aria-label="Día">
                        <option value="" disabled selected>DD</option>
                        <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
                        </select>

                        <select v-model="birthDate.month" aria-label="Mes">
                        <option value="" disabled selected>MM</option>
                        <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
                        </select>

                        <select v-model="birthDate.year" aria-label="Año">
                        <option value="" disabled selected>YYYY</option>
                        <option v-for="y in 100" :key="y" :value="2013 - y">{{ 2013 - y }}</option>
                        </select>
                    </div>

                    <div class="continue__registration">
                        <button class="auth__continue">
                            <router-link to="/login/terms-and-conditions">
                                > <span class="auth__highlight">Continuar</span>
                            </router-link>
                        </button>
                    </div>



                </div>
             </div>
        </div>

        

    </main>
</template>
  


<style lang="scss" scoped>

.main__container {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    font-family: Bellota;
    font-size: 1.5rem;
}

.back__icon {
    position: absolute;

    img {
        width: 50px;
        cursor: pointer;
    }
}

.information__user{
    color:Red;
}

.start__registration{
    display:flex;
    flex-direction: row;
    height:100vh;
}


.all__information{
    display:flex;
    flex-direction: column;
    // border:1px solid green;
    width:75vw;
    height:100vh;
    margin-left: 20%;
    margin-top: 13%;
}

label {
    color: black;
    font-weight: bold;
}

.all__information {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.all__information p{
    color: rgb(from var(--text-black) r g b / 50%)
}

label {
    color: #663300;
    font-weight: bold;
    font-size: 1.7rem;
    margin-bottom: 0px;
}

.info-text {
    font-size: 0.85rem;
    color: #999999;
    margin-top: -10px;
    margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
input[type="password"],
select {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #663300;
    background-color: var(--background-secondary);
    color: #ffffff;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    margin-bottom: 15px;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="password"]::placeholder,
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

.continue__registration{
  color: var(--color-accent);
  display: flex;
  flex-direction: row;
  justify-content: end;
  text-decoration: none;
  font-size: 1.6rem;
}
.auth__continue{
  color: var(--color-accent);
  display: flex;
  flex-direction: row;
  justify-content: end;
  text-decoration: none;
  font-size: 1.6rem;
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

.content {
    padding: 14rem 3rem 1rem 4rem;
    max-width: 600px;
}

.__items__terms_conditions {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.custom__checkbox {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;

    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 30px;
        border: 2px solid var(--color-accent);
        border-radius: 6px;
    }

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
    }

    .label__text {
        color: var(--background-primary);
        margin-left: 10px;
    }

    a {
        color: var(--text-contrast);
        text-decoration: underline;
        font-weight: bold;
    }

}

</style>