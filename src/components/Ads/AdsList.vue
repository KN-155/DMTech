<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
        <app-products-filter :categoryId="categoryId" />
        <app-product-card v-for="(ad, i) in ads" :key="i" :ad="ad" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from './Card';
import Filter from './Filter';

export default {
  computed: {
    ads() {
      return this.$store.getters.SORT_ADS([
        this.category,
        this.subcategory,
        this.direction,
      ]);
    },
    categoryId() {
      return this.$route.params['category'];
    },
    category: {
      get() {
        return this.$store.getters.CATEGORY;
      },
      set(value) {
        this.$store.dispatch('CATEGORY', value);
      },
    },
    subcategory() {
      return this.$store.getters.SUBCATEGORY;
    },
    direction() {
      return this.$store.getters.DIRECTION;
    },
  },
  components: {
    appProductsFilter: Filter,
    appProductCard: Card,
  },
};
</script>

<style scoped></style>
