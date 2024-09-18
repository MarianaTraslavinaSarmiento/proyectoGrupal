import { interalRoutes } from './internal.routes.js'

import PlaceHolder from "@views/placeholder/PlaceHolder.vue";
import AppPage from "@views/AppPage.vue";
import Auth from "@views/login/Auth.vue";

export const routes = [
    {
        path: '/',
        name: 'auth',
        component: PlaceHolder
    },
    {
        path: '/login',
        name: 'login',
        component: Auth
    },
    {
        path: '/app',
        name: 'app',
        component: AppPage,
        children: interalRoutes
    }


]