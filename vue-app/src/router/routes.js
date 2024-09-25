import { interalRoutes } from './internal.routes.js'

import SplashScreen from "@views/splash-screen/SplashScreen.vue";
import AppPage from "@views/AppPage.vue";
import Auth from "@views/login/Auth.vue";
import TermsAndConditions from "@views/login/TermsAndConditions.vue";
import StartSession from "@views/login/StartSession.vue"
import WorkshopsAndCraftStores from "@views/workshops-crafts-stores/WorkshopsAndCraftStores.vue"

import SingUp from "@views/singup/SingUp.vue";
import RegisterRuraqMaki from "@views/singup/RegisterRuraqMaki.vue";


import HeaderTitle from "@components/header-title/HeaderTitle.vue"


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
        path: '/login/session-start',
        name: 'sessionStart',
        component: StartSession
    },
    {
        path: '/workshops-craft-stores',
        name: 'workshopsAndCraftStores',
        component: WorkshopsAndCraftStores
    },
    {
        path: '/singup',
        name: 'singup',
        component: SingUp
    },
    {   
        path: '/singup/RegisterRuraqMaki',
        name: 'RegisterRuraqMaki',
        component: RegisterRuraqMaki
    },
    {
        path: '/app',
        name: 'app',
        component: AppPage,
        children: interalRoutes
    }

]