<template>
  <v-btn fab bottom right color="deep-purple" dark fixed @click="onNewAd">
    <v-icon>add</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    onNewAd() {
      if (this.$store.state.isActive) {
        this.$store.commit('changeVisibilityNewAdWindow', true);
      } else {
        this.$store.commit('changeVisibilityLoginWindow', true);
      }
    },
  },
};
</script>

<style scoped></style>
