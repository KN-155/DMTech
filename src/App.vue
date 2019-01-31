<template>
  <v-app id="inspire">
    <app-drawer></app-drawer>
    <app-nav-bar></app-nav-bar>
    <app-content></app-content>
    <app-new-ad-button></app-new-ad-button>
    <app-new-ad></app-new-ad>
  </v-app>
</template>

<script>
  import NavBar from './components/Menu/NavBar'
  import Drawer from "./components/Menu/Drawer";
  import NewAd from "./components/Ads/NewAd";
  import NewAdButton from "./components/Menu/NewAdButton";
  import Content from "./components/Menu/Content";

  export default {
    components: {
      appNavBar: NavBar,
      appDrawer: Drawer,
      appNewAd: NewAd,
      appNewAdButton: NewAdButton,
      appContent: Content
    }
  }
</script>

<style scoped>
</style>
