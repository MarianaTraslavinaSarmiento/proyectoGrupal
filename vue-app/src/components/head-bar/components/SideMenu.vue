<script setup>
import Avatar from '@/components/avatar/Avatar.vue'
import SideItemLink from './SideItemLink.vue'
import menuList from './data/menu-list.js'
import DiamondIcon from '@icons/general/DiamondIcon.vue'
import DiamondSeparator from '@components/diamond-separator/DiamondSeparator.vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['close', 'logout']);

const closeMenu = () => {
    emit('close');
};

const logout = () => {
    emit('logout');
};
</script>

<template>
    <Transition name="slide">
        <div v-if="isOpen" class="side-menu">
            <div class="user-info">
                <Avatar class="user-avatar" />
                <span class="user-name">{{ user.username }}</span>
            </div>
            <nav class="menu-items">
                <ul>
                    <li v-for="item in menuList" :key="item.pageName">
                        <DiamondSeparator v-if="item.separator" :icon="DiamondIcon" class="separator" />
                        <SideItemLink v-else
                            :icon-component="item.icon"
                            :page-name="item.pageName"
                            :text="item.text"
                            :alias="item.alias"
                        />
                    </li>
                </ul>
                <button @click="logout" class="logout-button">Cerrar sesión</button>
            </nav>
            <div class="footer-info">
                <span class="footer-text">Aplicación potenciada por:</span>
                <img src="https://caroline.sirv.com/ruraq%20maki/Ministerio%20de%20Arte%20y%20Cultura.png" alt="Ministerio de Arte y Cultura" class="footer-image" />
            </div>
        </div>
    </Transition>
    <div v-if="isOpen" class="overlay" @click="closeMenu"></div>
</template>

<style lang="scss" scoped>
.side-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 70%;
    background-color: var(--background-primary);
    box-shadow: 20px 0px 38px 2px rgba(0, 0, 0, 0.25);
    padding: 20px;
    overflow-y: auto;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .user-info {
        display: flex;
        align-items: center;
        gap: 1.3rem;

        .user-avatar {
            width: 60px;
            height: 60px;
        }

        .user-name {
            font-family: var(--font-bellota);
            font-weight: normal;
            color: var(--color-text);
            font-size: 1.5rem;
        }
    }
}

.menu-items {
    flex-grow: 1;

    .separator {
        width: 100%;
        margin: 2em 0;
        color: var(--background-secondary);
    }

    ul {
        list-style-type: none;
        padding:0;
        margin: 0;
        li {
            margin-bottom: 2em;
        }
    }
}

.footer-info {
    display: flex;
    font-family: var(--font-bellota);
    font-size: 1.2rem;
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;

    .footer-image {
        max-width: 70%;
        margin-top: 10px;
        height: auto;
    }
}

.logout-button {
    width: 100%;
    padding: 10px;
    background-color: var(--background-secondary);
    color: white;
    border: none;
    border-radius: 5px;
    font-family: var(--font-bellota);
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
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