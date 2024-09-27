<template>
  <div class="profile">
    <h1>Foto de perfil</h1>
    <Avatar :showEditIcon="true" class="profile-photo" />

    <div class="user-info">
      <div class="profile-section">
        <label>Usuario:</label>
        <div class="input-group">
          <input style="min-width: 250px;" type="text" v-model="user.username" :readonly="!isEditing.username" placeholder="Nombre de usuario">
          <button @click="toggleEdit('username')" class="edit-button">
            <EditIcon class="edit-icon"/>
          </button>
        </div>
      </div>
      <div class="profile-section">
        <label>Correo:</label>
        <div class="input-group">
          <input style="min-width: 250px;" type="email" v-model="user.email" :readonly="!isEditing.email" placeholder="Correo electrónico">
          <button @click="toggleEdit('email')" class="edit-button">
            <EditIcon class="edit-icon"/>
          </button>
        </div>
      </div>
      <div class="genre-and-born_date">
        <div class="profile-section">
        <label>Sexo:</label>
        <div class="input-group">
          <input style="max-width: 30px;" type="text" v-model="user.genre" :readonly="!isEditing.genre" placeholder="M o F">
          <button @click="toggleEdit('genre')" class="edit-button">
            <EditIcon class="edit-icon"/>
          </button>
        </div>
      </div>
      <div class="profile-section">
        <label>Fecha de nacimiento:</label>
        <div class="input-group">
          <input type="date" v-model="user.born_date" :readonly="!isEditing.born_date" placeholder="DD/MM/AAAA">
          <button @click="toggleEdit('born_date')" class="edit-button">
            <EditIcon class="edit-icon"/>
          </button>
        </div>
      </div>
      </div>

    </div>
    
  </div>
</template>

<script setup>
import Avatar from '@components/avatar/Avatar.vue';
import EditIcon from '@icons/profile/EditIcon.vue';
import { ref, reactive } from 'vue'

const user = reactive({
  username: 'SaraMartin9',
  email: 'SMBY1996@gmail.com',
  genre: 'F',
  born_date: '1996-09-15'
})

const isEditing = reactive({
  username: false,
  email: false,
  genre: false,
  born_date: false
})


const toggleEdit = (field) => {
  isEditing[field] = !isEditing[field]
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-bellota);

  .edit-icon {
    width: 1.5em;
    color: var(--text-contrast);
  }

  .user-info {
    margin-top: 30px;
    padding-inline: 15px;
    max-width: calc(100vw - 15px) ;
  }

  .genre-and-born_date {
    display: flex;
    gap: 5px;
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
    gap: 10px;
    align-items: center;
    justify-content: space-between;


    h2,
    h3 {
      margin-bottom: 10px;
    }

    label {
      display: block;
      color: var(--text-contrast);
      font-size: 1.7rem;
      font-weight: bold;
    }

    .input-group {
      display: flex;
      align-items: center;

      input {
        width: 100%;
        background-color: var(--background-secondary);
        color: #F3D3BD;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 1.7rem;
        min-width: 30px;

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
</style>