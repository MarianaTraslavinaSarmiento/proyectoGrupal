<script setup>
import { computed } from 'vue'
import { useUserStore } from '@stores/user.js'
import  EditIcon  from '@icons/profile/EditIcon.vue'

const props = defineProps({
  showEditIcon: {
    type: Boolean,
    default: false
  }
})

const userStore = useUserStore()
const user = computed(() => userStore.user)

</script>

<template>
  <div class="avatar">
    <img :src="user.profile_pic.url" :alt="user.username" class="avatar-img">
    <EditIcon v-if="showEditIcon" class="edit-icon" />
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2.5px solid var(--color-border);

  .avatar-img {
    aspect-ratio: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .edit-icon {
    position: absolute;
    top: 40%;
    left: 42%;

    color: var(--color-black);
    padding: 4px;
    width: 18%;
    cursor: pointer;
  }
}
</style>