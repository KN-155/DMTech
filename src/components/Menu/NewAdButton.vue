<template>
  <v-btn fab bottom right color="deep-purple" dark fixed @click="onNewAd">
    <v-icon>add</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    onNewAd() {
      if (this.$store.getters.USER) {
        this.$store.dispatch('CHANGE_VISIBILITY_NEW_AD_WINDOW', true);
      } else {
        this.$store.dispatch('CHANGE_VISIBILITY_LOGIN_WINDOW', true);
      }
    },
  },
};
</script>

<style scoped></style>
