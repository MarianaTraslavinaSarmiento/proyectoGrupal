import { interalRoutes } from './internal.routes.js'

import PlaceHolder from "@views/placeholder/PlaceHolder.vue";
import AppPage from "@views/AppPage.vue";

export const routes = [
    {
        path: '/',
        name: 'auth',
        component: PlaceHolder
    },
    {
        path: '/app',
        name: 'app',
        component: AppPage,
        children: interalRoutes
    },
    {
        path: '/login',
        name: 'login',
        component: Auth
    }

]