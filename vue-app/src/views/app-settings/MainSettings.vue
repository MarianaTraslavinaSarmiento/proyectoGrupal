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
  </div>
</template>

<style scoped lang="scss">
.customer-service {
  position: relative;
  min-height: 100vh;
  font-family: 'Bellota', sans-serif;
  color: white;
}

.settings-view {
  color: white;
  font-family: 'Bellota', sans-serif;
  min-height: 100vh;
  padding: 15px 20px;
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
  width: 50px;
  height: 24px;
  border-radius: 12px;
  position: relative;
  transition: background-color 0.3s;
}

.toggle :deep(svg) {
  width: 44px;
  height: 24px;
  position: absolute;
  top: 0;
  transition: left 0.3s;
}

.toggle :deep(svg:first-child) {
  left: 16px;
}

.toggle :deep(svg:last-child) {
  left: 0;
}
</style>