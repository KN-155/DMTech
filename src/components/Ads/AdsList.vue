<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1>Список объявлений: {{ category }}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$route.params['category'];
    },
  },
};
</script>

<style scoped></style>
