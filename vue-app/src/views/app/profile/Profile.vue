<script setup>
import Avatar from '@components/avatar/Avatar.vue';
import EditIcon from '@icons/profile/EditIcon.vue';
import BackgroundPattern from '@components/background-pattern/BackgroundPattern.vue';
import { ref, reactive, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/user';
import { dateToYYYYMMDD, YYYYMMDDToDate } from '@/utils/formatDate';
import router from '@/router';

const userStore = useUserStore()

const user = ref(JSON.parse(JSON.stringify({
  ...userStore.userInfo,
  birth_date: dateToYYYYMMDD(userStore.userInfo.birth_date)
})));

const isEditing = reactive({
  username: false,
  email: false,
  gender: false,
  birth_date: false
});

const toggleEdit = (field) => {
  isEditing[field] = !isEditing[field];
  console.log(isEditing[field])
};

const originalUser = ref(JSON.parse(JSON.stringify({
  ...userStore.userInfo,
  birth_date: dateToYYYYMMDD(userStore.userInfo.birth_date)
})));

const userChanged = computed(() => {
  return JSON.stringify(user.value) !== JSON.stringify(originalUser.value);
});

const discardChanges = () => {
  user.value = JSON.parse(JSON.stringify(originalUser.value));
  Object.keys(isEditing).forEach(key => isEditing[key] = false);
};

const saveChanges = async () => {
  const userToSave = {
    ...user.value,
    birth_date: YYYYMMDDToDate(user.value.birth_date)
  };
  const updated = await userStore.updateUser(userToSave);
  if (updated.ok) {
    originalUser.value = JSON.parse(JSON.stringify(user.value));
    Object.keys(isEditing).forEach(key => isEditing[key] = false);
    window.location.reload()
  } else {
    discardChanges();
  }
};

const subscribedWorkshops = ref([]);

onMounted(async () => {
  subscribedWorkshops.value = await userStore.getSubscribedWorkshops();
});
</script>

<template>
  <div class="profile">
    <h1>Foto de perfil</h1>
    <Avatar :showEditIcon="true" class="profile-photo" />

    <div class="user-info">
      <div class="profile-section">
        <label>Usuario:</label>
        <div class="input-group">
          <input type="text" v-model="user.username" :readonly="!isEditing.username"
            placeholder="Nombre de usuario">
          <button @click="toggleEdit('username')" class="edit-button">
            <EditIcon class="edit-icon" />
          </button>
        </div>
      </div>
      <div class="profile-section">
        <label>Correo:</label>
        <div class="input-group">
          <input type="email" v-model="user.email" :readonly="!isEditing.email"
            placeholder="Correo electrónico">
          <button @click="toggleEdit('email')" class="edit-button">
            <EditIcon class="edit-icon" />
          </button>
        </div>
      </div>
      <div class="genre-and-born_date">
        <div class="profile-section">
          <label>Sexo:</label>
          <div class="input-group">
            <select v-model="user.gender" :disabled="!isEditing.gender">
              <option value="M">M</option>
              <option value="F">F</option>
              <option value="Other">Otro</option>
            </select>
            <button @click="toggleEdit('gender')" class="edit-button">
              <EditIcon class="edit-icon" />
            </button>
          </div>
        </div>
        <div class="profile-section">
          <label style="max-width: 95px; margin-right: 0px;">Fecha de nacimiento:</label>
          <div class="input-group">
            <input style="max-width: 100px; margin-right: 15px;" type="date" v-model="user.birth_date" :readonly="!isEditing.birth_date">
            <button @click="toggleEdit('birth_date')" class="edit-button">
              <EditIcon class="edit-icon" />
            </button>
          </div>
        </div>
      </div>
      <div class="buttons" v-if="userChanged">
        <button @click="discardChanges">Deshacer cambios</button>
        <button @click="saveChanges">Guardar cambios</button>
      </div>
    </div>

    <div class="subscribed-workshops">
      <h2>Talleres inscritos</h2>
      <div v-if="subscribedWorkshops.length > 0" class="workshops-list">
        <div 
          v-for="workshop in subscribedWorkshops" 
          :key="workshop._id"
          class="workshop-item"
        >
          {{ workshop.name }}
        </div>
      </div>
      <p v-else class="no-workshops">No estás inscrito en ningún taller actualmente.</p>
    </div>
  </div>
  <BackgroundPattern/>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-bellota);
  overflow-y: auto;
  height: 100vh;

  .edit-icon {
    width: 1.5em;
    color: var(--text-contrast);
    margin-left: 3px;
  }

  .user-info {
    margin-top: 30px;
    padding-inline: 10px;
    width: 95vw;
  }

  .genre-and-born_date {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  h1 {
    color: var(--text-contrast);
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .profile-photo {
    margin-bottom: 1rem;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 2px solid var(--text-contrast);
  }

  .profile-section {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;



    h2,
    h3 {
      margin-bottom: 10px;
    }

    label {
      color: var(--text-contrast);
      font-size: 1.6rem;
      font-weight: bold;
      margin-right: 15px;
    }

    .input-group {
      display: flex;
      align-items: center;

      select {
        background-color: var(--background-secondary);
        color: #F3D3BD;
        border-radius: 5px;
        border: none;
        font-size: 1.6rem;
        height: 40px;
        width: 50px;
        font-size: 1.2rem;
      }

      select[disabled] {
        opacity: 1;
      }

      input {
        background-color: var(--background-secondary);
        color: #F3D3BD;
        border-radius: 5px;
        border: none;
        font-size: 1.4rem;
        width: 220px;
        height: 40px;
        margin-right: 10px;


        &::placeholder {
          color: #A67B5B;
        }
      }

      .edit-button {
        background: none;
        border: none;
        color: #F3D3BD;
        padding: 5px;
        margin-left: 2px;
        cursor: pointer;
      }
    }
  }
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;

  button {
    font-size: 1.8rem;
    font-weight: bold;
    background-color: #ededed;

    &:nth-child(1) {
      color: var(--text-black);
    }

    &:nth-child(2) {
      color: var(--text-contrast);
    }
  }
}

.subscribed-workshops {
  margin-top: 30px;
  width: 95vw;
  max-width: 600px;

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: var(--text-contrast);
    text-align: center;
  }

  .workshops-list {
    display: grid;
    gap: 10px;
  }

  .workshop-item {
    background-color: var(--background-secondary);
    color:  var(--text-color);
    padding: 15px;
    border-radius: 5px;
    font-size: 1.4rem;
    transition: background-color 0.3s ease;
  }

  .no-workshops {
    text-align: center;
    color:  var(--text-color);
    font-size: 1.4rem;
    background-color: var(--background-secondary);
    padding: 20px;
    border-radius: 5px;
  }
}

</style>