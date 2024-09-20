<script setup>
import Avatar from '@components/avatar/Avatar.vue'
//   import { HeartIcon, ShoppingBagIcon, AcademicCapIcon, TicketIcon, CogIcon, ChatBubbleLeftIcon, PhoneIcon } from '@heroicons/vue/24/outline';

defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
});

defineEmits(['close']);

const menuItems = [
    { id: 1, label: 'Lista de favoritos' },
    { id: 2, label: 'Compras' },
    { id: 3, label: 'Talleres' },
    { id: 4, label: 'Canjear cupón' },
    { id: 5, label: 'Ajustes' },
    { id: 6, label: 'Comentarios' },
    { id: 7, label: 'Atención al cliente' },
];
</script>

<template>
    <transition name="slide">
        <div v-if="isOpen" class="side-menu">
            <div class="user-info">
                <Avatar class="user-avatar" />
                <span class="user-name">{{ user.name }}</span>
            </div>

            <nav class="menu-items">
                <ul>
                    <li v-for="item in menuItems" :key="item.id">
                        <a href="#" class="menu-item">
                            <!-- <component :is="item" class="item-icon" /> -->
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="footer-info">
                <!-- <img src="/peru-flag.png" alt="Peru flag" class="peru-flag"> -->
                <span class="footer-text">Aplicación potenciada por: Perú Ministerio de Cultura</span>
            </div>
        </div>
    </transition>

    <div v-if="isOpen" class="overlay" @click="$emit('close')"></div>
</template>


<style lang="scss" scoped>
.side-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 60%;
    background-color: var(--background-primary);
    box-shadow: 20px 0px 38px 2px rgba(0, 0, 0, 0.25);
    padding: 20px;
    overflow-y: auto;
    z-index: 1000;
    display: flex;
    flex-direction: column;

    .user-info {
        display: flex;
        align-items: center;

        gap: 1rem;

        .user-avatar {
            width: 60%;
            height: auto;
        }

        .user-name {
            font-family: var(--font-bellota);
            font-weight: regular;
            color: var(--color-text);
            font-size: 1.5rem;
            width: 100%;
        }
    }
}



.menu-items {
    flex-grow: 1;

    ul {
        list-style-type: none;
        padding: 0;
    }

    .menu-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        color: var(--color-accent);
        text-decoration: none;

        &:hover {
            opacity: 0.8;
        }

        .item-icon {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }
}

.footer-info {
    font-size: 0.8rem;
    color: var(--color-text-muted);
    display: flex;
    align-items: center;

    .peru-flag {
        width: 24px;
        height: 16px;
        margin-right: 8px;
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}
</style>