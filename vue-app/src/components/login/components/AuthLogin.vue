<script setup>
import FacebookIcon from "@/assets/icons/auth/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/auth/InstagramIcon.vue";
import GmailIcon from "@/assets/icons/auth/GmailIcon.vue";
import UserIcon from "@/assets/icons/auth/UserIcon.vue";
</script>

<template>
  <main>
    <h1>Inicia sesión y continua viendo tus artesanías favoritas</h1>
    <div class="auth__buttons">
      <button>
        <FacebookIcon />
        <p>Inicia sesión con Facebook</p>
      </button>
      <button>
        <InstagramIcon />

        <p>Inicia sesión con Instagram</p>
      </button>
      <button>
        <GmailIcon />
        <p>Inicia sesión con Gmail</p>
      </button>
      <button>
        <UserIcon />
        <p>Inicia sesión con tu cuenta de Rurak Maki</p>
      </button>
    </div>
  </main>
</template>

<style scoped>

main {

    background-color: var(--background-secondary)

}


button {
  background-color: var(--background-secondary);
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
