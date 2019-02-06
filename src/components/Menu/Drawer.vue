<template>
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    fixed
    app
    v-model="visibleDrawer"
    :mini-variant="isMiniDrawer"
  >
    <v-list>
      <v-list-tile
        v-for="item in items"
        :key="item.text"
        :to="'/list/' + item.url"
        active-class="deep-purple--text grey lighten-3"
      >
        <v-list-tile-action>
          <v-icon large color="deep-purple">{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title v-text="item.text"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { MAIN_LINKS } from '../../constants';

export default {
  data() {
    return {
      items: MAIN_LINKS,
    };
  },
  computed: {
    isMiniDrawer() {
      return this.$store.state.miniDrawer;
    },
    visibleDrawer: {
      get() {
        return this.$store.state.openedDrawer;
      },
      set(value) {
        this.$store.commit('changeDrawer', value);
      },
    },
  },
};
</script>

<style scoped></style>
