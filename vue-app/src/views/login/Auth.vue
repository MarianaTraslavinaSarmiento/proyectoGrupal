<script setup>
import GmailIcon from "@/assets/icons/auth/GmailIcon.vue";
import UserIcon from "@/assets/icons/auth/UserIcon.vue";
import DiscordIcon from "@/assets/icons/auth/DiscordIcon.vue";
import { useAuth } from "@/composables/useAuth";
import router from "@/router";
</script>

<template>
  <main class="auth">
    <div class="auth__container">
      <h1 class="auth__title">
        Inicia sesión y<br>
        continúa viendo <span class="auth__highlight">tus</span> <br>
        <span class="auth__highlight">artesanías favoritas</span>
      </h1>
      <div class="auth__buttons">
        <button @click="useAuth('google')" class="auth__button auth__button__instagram">
          <GmailIcon class="auth__button_icon" />
          <span class="auth__button-text">Inicia sesión con <span style="font-weight: bold;"> Gmail</span></span>
        </button>
        <button @click="useAuth('discord')" class="auth__button auth__button__facebook">
          <DiscordIcon class="auth__button_icon" />
          <span class="auth__button-text">Inicia sesión con <span style="font-weight: bold;"> Discord</span></span>
        </button>
        <button @click="router.push('/login/session-start')" class="auth__button auth__button__ruraq_maki">
          <img src="@/assets/img/auth/userProfileIcon.png" class="auth__button_icon" alt="">
          <span class="auth__button-text">Inicia sesión con tu cuenta de <span style="font-weight: bold;"> Ruraq Maki</span></span>
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

main {
  font-family: Bellota;
}
.auth {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-image: url('@/assets/img/auth/backgroundAuth.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-inline: 1rem;
  background-color: var(--background-primary);
}

.auth__container {
  border-radius: 10px;
  margin-top: 10rem;
  padding: 2rem;
  text-align: center;
  max-width: 350px;
  width: 100%;
}

.auth__title {
  font-size: 2.7rem;
  color: var(--text-color);
  margin-bottom: 4rem;
}

.auth__highlight {
  color: var(--color-accent);
  font-weight: bold;
}

.auth__buttons {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.auth__button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem;
  padding-inline: 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.8rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.auth__button:hover {
  opacity: 0.9;
}

.auth__button_icon {
  margin-right: 1.5rem;
  width: 32px;
  height: 32px;
}

.auth__button-text {
  color: var(--text-color) ;
}

.auth__button__ruraq_maki,
.auth__button__instagram,
.auth__button__instagram, 
.auth__button__facebook {
  background-color: var(--background-secondary);
}
</style>