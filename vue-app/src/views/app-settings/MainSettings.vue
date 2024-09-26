<script setup>
import { ref } from 'vue';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import AcceptedSettings from "@/assets/icons/app-configuration/SettingsC.vue";
import SettingsNOTAccepted from "@/assets/icons/app-configuration/SettingsO.vue";

const notifications = ref({
  purchases: false,
  discounts: false,
  workshops: false,
  sound: false
});

const toggleNotification = (key) => {
  notifications.value[key] = !notifications.value[key];
};
</script>



<template>
  <div class="customer-service">
    <header-title :title="'Ajustes'" :hideDiamond="false" />
  <div class="settings-view">
        <h2 class="section-title">Global</h2>
            <div class="settings-list">
            <div class="setting-item">
                <span>Cambiar país y región</span>
                <span class="setting-value">Canadá, Toronto</span>
            </div>
            <div class="setting-item">
                <span>Cambiar idioma</span>
                <span class="setting-value">Español</span>
            </div>
            <div class="setting-item">
                <span>Cambiar moneda</span>
                <span class="setting-value">PEN</span>
            </div>
            </div>

            <h2 class="section-title">Notificaciones</h2>
            <div class="settings-list">
            <div class="setting-item">
                <span>Mostrar notificaciones de compras</span>
                <div class="toggle" @click="toggleNotification('purchases')">
                <AcceptedSettings v-if="notifications.purchases" />
                <SettingsNOTAccepted v-else />
                </div>
            </div>
            <div class="setting-item">
                <span>Mostrar notificaciones de descuentos</span>
                <div class="toggle" @click="toggleNotification('discounts')">
                <AcceptedSettings v-if="notifications.discounts" />
                <SettingsNOTAccepted v-else />
                </div>
            </div>
            <div class="setting-item">
                <span>Mostrar notificaciones de talleres</span>
                <div class="toggle" @click="toggleNotification('workshops')">
                <AcceptedSettings v-if="notifications.workshops" />
                <SettingsNOTAccepted v-else />
                </div>
            </div>
            <div class="setting-item">
                <span>Sonido de notificaciones</span>
                <div class="toggle" @click="toggleNotification('sound')">
                <AcceptedSettings v-if="notifications.sound" />
                <SettingsNOTAccepted v-else />
                </div>
            </div>
        </div>
    </div>

    <h2 class="section-title">Legal</h2>
    <div class="settings-list">
      <div class="setting-item">
        <span>Política de privacidad</span>
      </div>
      <div class="setting-item">
        <span>Información legal</span>
      </div>
      <div class="setting-item">
        <span>Libro de reclamaciones</span>
      </div>
    </div>

  </div>
</template>



<style scoped lang="scss">

.customer-service {
  position: relative;
  min-height: 100vh;
//   padding-bottom: 70px;
  font-family: 'Bellota', sans-serif;
  color: white;
}


settings-view {
  border: 10px solid red;
  color: white;
  font-family: 'Bellota', sans-serif;
  min-height: 100vh;
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.back-button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.title-diamond {
  background-color: #d8a7a7;
  color: #4a2828;
  padding: 10px;
  transform: rotate(45deg);
  display: inline-block;
  margin-left: 20px;
}

.title-diamond span {
  display: inline-block;
  transform: rotate(-45deg);
}

.section-title {
  color: #ff9999;
  font-size: 20px;
  margin-bottom: 10px;
}

.settings-list {
  background-color: #6b3e3e;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #7e4b4b;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-value {
  color: #ff9999;
}

.toggle {
  cursor: pointer;
}

</style>