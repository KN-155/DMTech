<template>
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    fixed
    app
    v-model="visibleDrawer"
    :mini-variant="mini && $vuetify.breakpoint.lgAndUp"
  >
    <v-list class="pb-0" v-if="$vuetify.breakpoint.lgAndUp">
      <v-list-tile v-if="mini" @click.stop="mini = !mini">
        <v-list-tile-action>
          <v-icon color="deep-purple">chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile v-else>
        <v-list-tile-content>
          <v-list-tile-title><h3>Категории</h3></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon color="deep-purple">chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider light></v-divider>
    </v-list>

    <v-list class="pt-0">
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
      mini: false,
    };
  },
  computed: {
    visibleDrawer: {
      get() {
        return this.$store.getters.OPENED_DRAWER;
      },
      set(value) {
        this.$store.dispatch('CHANGE_DRAWER', value);
      },
    },
  },
};
</script>

<style scoped></style>
