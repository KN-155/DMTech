<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs6 sm4>
        <v-select
          color="deep-purple"
          :items="categories"
          label="Категория"
          v-model="category"
          :disabled="!!this.categoryId"
        ></v-select>
      </v-flex>
      <v-flex xs6 sm4>
        <v-select
          color="deep-purple"
          label="Подкатегория"
          :disabled="!category"
          :items="selectSubcategory"
          v-model="subcategory"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm4>
        <v-select
          color="deep-purple"
          :items="sortList"
          label="Сортировать"
          v-model="direction"
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { CATEGORY } from '../../constants';
export default {
  props: ['categoryId'],
  data() {
    return {
      categories: CATEGORY,
      sortList: [
        'Сначала новые',
        'Сначала старые',
        'Сначала дешевые',
        'Сначала дорогие',
      ],
    };
  },
  computed: {
    selectSubcategory() {
      const subcategoryIndex = this.categories.findIndex(
        item => item.text === this.category,
      );
      return ~subcategoryIndex
        ? this.categories[subcategoryIndex].subcategory
        : [];
    },
    category: {
      get() {
        return this.$store.getters.CATEGORY;
      },
      set(value) {
        this.$store.dispatch('CHANGE_CATEGORY', value);
      },
    },
    subcategory: {
      get() {
        return this.$store.getters.SUBCATEGORY;
      },
      set(value) {
        this.$store.dispatch('CHANGE_SUBCATEGORY', value);
      },
    },
    direction: {
      get() {
        return this.$store.getters.DIRECTION;
      },
      set(value) {
        this.$store.dispatch('CHANGE_DIRECTION', value);
      },
    },
  },
  mounted() {
    if (this.categoryId) {
      const category = this.categories.find(
        item => item.category === this.categoryId,
      );
      this.category = category.text;
    } else {
      this.category = '';
    }
  },
  beforeUpdate() {
    if (this.categoryId) {
      const category = this.categories.find(
        item => item.category === this.categoryId,
      );
      if (this.category !== category.text) this.category = category.text;
    }
  },
};
</script>

<style scoped></style>
