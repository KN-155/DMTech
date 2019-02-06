import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Ad from '../components/Ads/Ad';
import AdsList from '../components/Ads/AdsList';
import Basket from '../components/Favorites';
import Setting from '../components/Setting';
import Profile from '../components/User/Profile';
import MyAds from '../components/User/MyAds';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'Главная страница',
      component: Home,
    },
    {
      path: '/ad/:id',
      name: 'Объявление',
      component: Ad,
    },
    {
      path: '/list/:category',
      name: 'Список Объявлений',
      component: AdsList,
    },
    {
      path: '/favorites',
      name: 'Избранное',
      component: Basket,
    },
    {
      path: '/setting',
      name: 'Настройки',
      component: Setting,
    },
    {
      path: '/profile',
      name: 'Профиль',
      component: Profile,
    },
    {
      path: '/ads',
      name: 'Мои Объявления',
      component: MyAds,
    },
  ],
  mode: 'history',
});
