<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
        <app-product-card v-for="(ad, i) in ads" :key="i" :ad="ad" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from '../Ads/Card';

export default {
  computed: {
    ads() {
      return this.$store.getters.MY_ADS(this.userId);
    },
    userId() {
      return this.$store.getters.USER_ID;
    },
  },
  components: {
    appProductCard: Card,
  },
};
</script>

<style scoped></style>
