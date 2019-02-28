import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Ad from '../components/Ads/Ad';
import AdsList from '../components/Ads/AdsList';
import Favorites from '../components/User/FavoriteAds';
import Setting from '../components/Setting';
import Profile from '../components/User/Profile';
import MyAds from '../components/User/MyAds';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'Main',
      component: Home,
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'Ad',
      component: Ad,
    },
    {
      path: '/list/:category',
      name: 'Ads List',
      component: AdsList,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/ads',
      name: 'My Ads',
      component: MyAds,
    },
  ],
  mode: 'history',
});
