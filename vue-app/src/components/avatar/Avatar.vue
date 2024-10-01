<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import EditIcon from '@icons/profile/EditIcon.vue'

const props = defineProps({
  showEditIcon: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['fileSelected'])
const userStore = useUserStore()
const user = computed(() => userStore.user)
const fileInput = ref(null)

const openFilePicker = () => {
  fileInput.value.click()
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    emit('fileSelected', file)
  }
}
</script>

<template>
  <div class="avatar">
    <div  class="edit-icon-wrapper">
      <EditIcon v-if="showEditIcon" class="edit-icon" />
    </div>
    <img :src="user.profile_pic_url" :alt="user.username" class="avatar-img">
    <input
      type="file"
      ref="fileInput"
      @change="handleFileChange"
      accept="image/*"
      style="display: none;"
    >
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2.5px solid var(--color-border);
  position: relative;
  
  .avatar-img {
    aspect-ratio: 1;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .edit-icon-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;

    .edit-icon {
      color: var(--text-color);
      width: 15%;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>