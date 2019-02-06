<template>
  <v-dialog v-model="visibleWindow" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Добавить новое объявление</span>
      </v-card-title>
      <v-card-text>
        Форма добавления
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="deep-purple" flat @click="visibleWindow = false"
          >Отмена</v-btn
        >
        <v-btn color="deep-purple" flat @click="visibleWindow = false"
          >Опубликовать</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    visibleWindow: {
      get() {
        return this.$store.state.visibleNewAdWindow;
      },
      set(value) {
        this.$store.commit('changeVisibilityNewAdWindow', value);
      },
    },
  },
};
</script>

<style scoped></style>
