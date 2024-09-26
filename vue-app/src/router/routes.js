import { internalRoutes } from './internal.routes.js'

import SplashScreen from "@views/splash-screen/SplashScreen.vue";
import AppPage from "@views/AppPage.vue";
import Auth from "@views/login/Auth.vue";
import TermsAndConditions from "@views/login/TermsAndConditions.vue";
import StartSession from "@views/login/StartSession.vue"
import WorkshopsAndCraftStores from "@views/workshops-crafts-stores/WorkshopsAndCraftStores.vue"

import SingUp from "@views/singup/SingUp.vue";
import RegisterRuraqMaki from "@views/singup/RegisterRuraqMaki.vue";
import GeneralPublicInfoWorkshops from "@views/educational-workshops/GeneralPublicInfoWorkshops.vue"
import PurchaseMadeMessage from "@views/your-shopping-cart/PurchaseMadeMessage.vue"
import CustomerService from "@views/app-settings/CustomerService.vue"
import CommentsToTheApp from "@views/app-settings/CommentsToTheApp.vue"
import MainSettings from "@views/app-settings/MainSettings.vue"
import MoreInformationAboutTheWorkshop from "@views/educational-workshops/MoreInformationAboutTheWorkshop.vue"


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
        path: '/signup',
        name: 'signup',
        component: SingUp
    },
    {   
        path: '/singup/RegisterRuraqMaki',
        name: 'RegisterRuraqMaki',
        component: RegisterRuraqMaki
    },
    {   
        path: '/educational-workshops/GeneralPublicInfoWorkshops',
        name: 'GeneralPublicInfoWorkshops',
        component: GeneralPublicInfoWorkshops
    },
    {   
        path: '/your-shopping-cart/PurchaseMadeMessage',
        name: 'PurchaseMadeMessage',
        component: PurchaseMadeMessage
    },
    {   
        path: '/app-settings/CustomerService',
        name: 'CustomerService',
        component: CustomerService
    },
    {   
        path: '/app-settings/CommentsToTheApp',
        name: 'CommentsToTheApp',
        component: CommentsToTheApp
    },
    {   
        path: '/app-settings/MainSettings',
        name: 'MainSettings',
        component: MainSettings
    },
    {   
        path: '/educational-workshops/MoreInformationAboutTheWorkshop',
        name: 'MoreInformationAboutTheWorkshop',
        component: MoreInformationAboutTheWorkshop
    },
    {
        path: '/app',
        name: 'app',
        component: AppPage,
        children: internalRoutes
    }

]