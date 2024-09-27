<template>
  <div class="profile">
    <h1>Foto de perfil</h1>
    <Avatar :showEditIcon="true" class="profile-photo" />
    <div class="fields-container">
      <template v-for="(label, field) in labels" :key="field">
        <div :class="['field', { split: field === 'gender' }]">
          <template v-if="field === 'gender'">
            <div v-for="subField in ['gender', 'birthdate']" :key="subField" class="sub-field" :class="subField">
              <label>{{ labels[subField] }}:</label>
              <div class="input-container">
                <input :type="inputTypes[subField]" v-model="editableFields[subField]" :disabled="!editMode[subField]" :class="{ 'input-gender': subField === 'gender' }" />
                <button @click="toggleEdit(subField)" class="edit-button">
                  <EditIcon />
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <label>{{ label }}:</label>
            <div class="input-container">
              <input v-if="field === 'phone'" type="text" class="country-code" v-model="editableFields.phoneCountryCode" :disabled="!editMode.phoneCountryCode" placeholder="+1" />
              <input :type="inputTypes[field]" v-model="editableFields[field]" :disabled="!editMode[field]" :placeholder="field === 'phoneNumber' ? 'Añadir número de celular' : ''" />
              <button @click="toggleEdit(field)" class="edit-button">
                <EditIcon />
              </button>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import Avatar from '@components/avatar/Avatar.vue';
import EditIcon from '@icons/profile/EditIcon.vue';
import { ref, reactive, computed } from 'vue';
import { useUserStore } from '@stores/user.js'

const userStore = useUserStore()
const user = computed(() => userStore.user)

const editableFields = reactive({
  username: user.value.name,
  email: user.value.email,
  phoneCountryCode: '',
  phoneNumber: '',
  gender: user.value.sex,
  birthdate: user.value.birthday
})

const splitPhoneNumber = (phone) => {
  const match = phone.match(/^(\+\d+)-(.*)$/)
  editableFields.phoneCountryCode = match ? match[1] : ''
  editableFields.phoneNumber = match ? match[2] : phone
}

splitPhoneNumber(user.value.phone)

const labels = {
  username: 'Usuario',
  email: 'Correo',
  phone: 'Celular',
  gender: 'Sexo',
  birthdate: 'Fecha de nacimiento'
}

const inputTypes = {
  username: 'text',
  email: 'email',
  phoneCountryCode: 'text',
  phoneNumber: 'tel',
  gender: 'text',
  birthdate: 'date'
}

const editMode = reactive(Object.keys(editableFields).reduce((acc, field) => ({ ...acc, [field]: false }), {}))

const toggleEdit = (field) => {
  editMode[field] = !editMode[field]
  if (field === 'phoneCountryCode' || field === 'phoneNumber') {
    editMode.phoneCountryCode = editMode.phoneNumber = editMode[field]
  }
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-bellota);

  h1 {
    color: var(--text-contrast);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .profile-photo {
    margin-bottom: 1rem;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid var(--text-contrast);
  }

  .fields-container {
    width: 100%;

    .field {
      margin-bottom: 1rem;
      display: flex;
      width: 100%;
      gap: 1rem;

      label {
        color: var(--text-contrast);
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        display: block;
      }

      .input-container {
        display: flex;
        align-items: center;
        overflow: hidden;

        input {
          flex-grow: 1;
          border-radius: 6px;
          padding: 0.5rem;
          border: none;
          background-color: var(--background-secondary);
          color: var(--text-color);
          
          &:disabled {
            color: rgba(var(--text-color-rgb), 0.6);
          }
        }

        .country-code {
          width: 3rem;
          margin-right: 1rem;
          border-right: 1px solid rgba(var(--text-color-rgb), 0.2);
        }

        .edit-button {
          background: none;
          border: none;
          cursor: pointer;
          width: 2em;
          color: var(--text-contrast);
        }
      }

      &.split {
        display: flex;
        gap: .5rem;

        .sub-field {
          flex: 1;
          gap: 1rem;
          display: flex;
          flex-direction: row;

          &.gender {
            flex: 0;

            .input-gender {
              width: 3rem;
            }
          }

          label {
            display: flex;
            align-items: center;
           
            color: var(--text-contrast);
          }
        }
      }
    }
  }
}
</style>