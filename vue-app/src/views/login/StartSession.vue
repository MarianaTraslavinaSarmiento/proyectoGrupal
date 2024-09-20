<script setup>

</script>

<template>
    <div class="login_form__container">
        <form class="login_form__content">
            <div class="form__input_group">
                <label for="usuario" class="login_form__label">Nombre de usuario, celular o correo</label>
                <input type="text" id="usuario" class="login_form__input" required>
            </div>
            <div class="form__input_group">
                <label for="contrasena" class="login-form__label">Contraseña</label>
                <input type="password" id="contrasena" class="login-form__input" required>
            </div>
            <button type="submit" class="login-form__submit-button">Iniciar sesión</button>
            <a href="#" class="login-form__forgot-password">¿Olvidaste tu contraseña?</a>
        </form>
    </div>

</template>

<style lang="scss" scoped>



</style>