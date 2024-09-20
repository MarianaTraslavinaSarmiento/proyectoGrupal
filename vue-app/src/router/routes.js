import { interalRoutes } from './internal.routes.js'

import PlaceHolder from "@views/placeholder/PlaceHolder.vue";
import AppPage from "@views/AppPage.vue";
import Auth from "@views/login/Auth.vue";
import TermsAndConditions from "@views/login/TermsAndConditions.vue";
import StartSession from '@/views/login/startSession.vue';

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
        path: '/login/terms-and-conditions',
        name: 'termsAndConditions',
        component: TermsAndConditions
    },
    {
        path: '/login/session-start',
        name: 'sessionStart',
        component: StartSession
    },
    {
        path: '/app',
        name: 'app',
        component: AppPage,
        children: interalRoutes
    }

]