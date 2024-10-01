import { internalRoutes } from './internal.routes.js'

import SplashScreen from "@views/splash-screen/SplashScreen.vue";
import AppPage from "@views/AppPage.vue";
import Auth from "@views/login/Auth.vue";
import TermsAndConditions from "@views/login/TermsAndConditions.vue";
import StartSession from "@views/login/StartSession.vue"

import SingUp from "@views/singup/SingUp.vue";
import RegisterRuraqMaki from "@views/singup/RegisterRuraqMaki.vue";


export const routes = [
    {
        path: '/',
        name: 'loading',
        component: SplashScreen,
        meta: { goHome: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Auth,
        meta: { goHome: true }
    },
    {
        path: '/login/terms-and-conditions',
        name: 'termsAndConditions',
        component: TermsAndConditions,
        meta: { goHome: true }
    },
    {
        path: '/login/session-start',
        name: 'sessionStart',
        component: StartSession,
        meta: { goHome: true }
    },

    {
        path: '/signup',
        name: 'signup',
        component: SingUp,
        meta: { goHome: true }
    },
    {   
        path: '/signup/ruraqmaki',
        name: 'ruraqmaki',
        component: RegisterRuraqMaki,
        meta: { goHome: true }
    },
    {
        path: '/app',
        name: 'app',
        component: AppPage,
        children: internalRoutes
    }

]