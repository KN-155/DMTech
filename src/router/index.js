import Vue from 'vue';
import Router from 'vue-router';
import Home from "../components/Home";
import Ad from "../components/Ads/Ad";
import AdsList from "../components/Ads/AdsList";
import Basket from "../components/Basket";
import Setting from "../components/Setting";
import Login from "../components/Auth/Login";
import Registration from "../components/Auth/Registration";
import Logout from "../components/Auth/Logout";
import Profile from "../components/User/Profile";
import MyAds from "../components/User/MyAds";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            name: 'Home',
            component: Home
        },
        {
            path: '/ad/:id',
            name: 'Ad',
            component: Ad
        },
        {
            path: '/list/:category',
            name: 'AdsList',
            component: AdsList
        },
        {
            path: '/orders',
            name: 'Basket',
            component: Basket
        },
        {
            path: '/setting',
            name: 'Setting',
            component: Setting
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/logout',
            name: 'Logout',
            component: Logout
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/ads',
            name: 'MyAds',
            component: MyAds
        }
    ],
    mode: 'history'
})