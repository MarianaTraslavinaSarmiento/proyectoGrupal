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

const showPopup = ref(false);
const popupContent = ref({
  title: '',
  options: [],
  type: ''
});

const selectedCountry = ref('Canadá, Toronto');
const selectedLanguage = ref('Español');
const selectedCurrency = ref('PEN');

const globalSettings = {
  country: [
    { name: 'Canadá', cities: ['Toronto'] },
    { name: 'Estados Unidos', cities: ['Nueva York'] },
    { name: 'México', cities: ['Ciudad de México'] },
    { name: 'España', cities: ['Madrid'] },
    { name: 'Argentina', cities: ['Buenos Aires'] },
    { name: 'Colombia', cities: ['Bucaramanga'] },
    { name: 'Francia', cities: ['París'] },
    { name: 'Italia', cities: ['Roma'] },
    { name: 'Alemania', cities: ['Berlín'] },
    { name: 'Reino Unido', cities: ['Londres'] },
    { name: 'Brasil', cities: ['São Paulo'] }
  ],
  language: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Chino', 'Japonés', 'Coreano', 'Árabe'],
  currency: ['CAD', 'USD', 'MXN', 'EUR', 'ARS', 'GBP', 'JPY', 'COP','CNY', 'KRW', 'AED']
};

const openPopup = (type) => {
  showPopup.value = true;
  popupContent.value.type = type;
  if (type === 'country') {
    popupContent.value = {
      title: 'Cambiar país y región',
      options: globalSettings.country.map(country => `${country.name} (${country.cities[0]})`),
      type: 'country'
    };
  } else if (type === 'language') {
    popupContent.value = {
      title: 'Cambiar idioma',
      options: globalSettings.language,
      type: 'language'
    };
  } else if (type === 'currency') {
    popupContent.value = {
      title: 'Cambiar moneda',
      options: globalSettings.currency,
      type: 'currency'
    };
  }
};

const closePopup = () => {
  showPopup.value = false;
};

const selectOption = (option) => {
  if (popupContent.value.type === 'country') {
    selectedCountry.value = option;
  } else if (popupContent.value.type === 'language') {
    selectedLanguage.value = option;
  } else if (popupContent.value.type === 'currency') {
    selectedCurrency.value = option;
  }
  closePopup();
};
</script>


<template>
  <div class="customer-service">
    <header-title :title="'Ajustes'" :hideDiamond="false" />
    <div class="settings-view">
      <h2 class="section-title">Global</h2>
      <div class="settings-list">
        <div class="setting-item clickable" @click="openPopup('country')">
          <span>Cambiar país y región</span>
          <span class="setting-value">{{ selectedCountry }}</span>
        </div>
        <div class="setting-item clickable" @click="openPopup('language')">
          <span>Cambiar idioma</span>
          <span class="setting-value">{{ selectedLanguage }}</span>
        </div>
        <div class="setting-item clickable" @click="openPopup('currency')">
          <span>Cambiar moneda</span>
          <span class="setting-value">{{ selectedCurrency }}</span>
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
        <a href="https://www.canva.com/design/DAGR1Or9v3g/eSMBMibECl1WK-V16qCp2Q/edit?utm_content=DAGR1Or9v3g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" class="setting-item clickable">
          <span>Política de privacidad</span>
        </a>
        <a href="https://www.canva.com/design/DAGR1KFkm5k/4qQijj-7hi1g4aFRE3ig6A/edit?utm_content=DAGR1KFkm5k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" class="setting-item clickable">
          <span>Información legal</span>
        </a>
        <a href="https://www.canva.com/design/DAGR1K2H9-E/dv-eQ0Ld6TkHK6l7gyDj3g/edit?utm_content=DAGR1K2H9-E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" class="setting-item clickable">
          <span>Libro de reclamaciones</span>
        </a>
      </div>
    </div>

    <div v-if="showPopup" class="popup-overlay">
      <div class="popup">
        <h3>{{ popupContent.title }}</h3>
        <ul>
          <li v-for="option in popupContent.options" :key="option" @click="selectOption(option)">
            {{ option }}
          </li>
        </ul>
        <button @click="closePopup">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.customer-service {
  position: relative;
  min-height: 100vh;
  font-family: 'Bellota', sans-serif;
  color: var(--text-color);
}

.settings-view {
  color: var(--text-color);
  font-family: 'Bellota', sans-serif;
  min-height: 70vh;
  padding: 15px 20px;
}

.section-title {
  color: var(--text-contrast);
  font-size: 20px;
  margin-bottom: 10px;
}

.settings-list {
  background-color: var(--background-secondary);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--background-secondary);
  font-size: 1.2rem;

  &.clickable {
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--background-secondary);
    }
  }
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-value {
  color:  rgb(from var(--text-color) r g b / 40%);
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

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(from var(--background-tertiary) r g b / 50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background-color: var(--background-secondary);
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;

  h3 {
    color: var(--text-color);
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--background-secondary);
    }
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: var(--background-base);
    color: #4a2828;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--background-base);
    }
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>