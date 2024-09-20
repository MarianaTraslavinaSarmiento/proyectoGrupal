import { interalRoutes } from './internal.routes.js'

import SplashScreen from "@views/splash-screen/SplashScreen.vue";
import AppPage from "@views/AppPage.vue";
import Auth from "@views/login/Auth.vue";
import TermsAndConditions from "@views/login/TermsAndConditions.vue";

export const routes = [
    {
        path: '/',
        name: 'loading',
        component: SplashScreen
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
        path: '/app',
        name: 'app',
        component: AppPage,
        children: interalRoutes
    }

]