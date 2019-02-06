<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" app fixed>
    <v-toolbar-side-icon @click.stop="onSideIcon"></v-toolbar-side-icon>
    <v-toolbar-title>
      <span class="hidden-sm-and-down">Доска Объявлений</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      color="deep-purple"
      flat
      solo
      hide-details
      prepend-inner-icon="search"
      label="Поиск"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>

    <v-menu offset-y left>
      <v-btn icon slot="activator">
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="i in 5"
          :key="i"
          @click="
            '';

          "
        >
          <v-list-tile-title>уведомление {{ i }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-menu offset-y left>
      <v-btn icon large slot="activator">
        <v-avatar size="36px" color="deep-purple">
          <img
            v-if="this.$store.state.isActive"
            src="https://pp.userapi.com/c850632/v850632107/4e6f3/IbBVcRfI14g.jpg"
            alt="Avatar"
          />
          <v-icon v-else dark>account_circle</v-icon>
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(link, index) in links"
          :key="index"
          :to="link.url"
          active-class="deep-purple--text"
          @click="link.method ? methods[link.method]() : ''"
        >
          <v-list-tile-action>
            <v-icon left>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{ link.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { USER_LINKS, GUEST_LINKS } from '../../constants';

export default {
  data() {
    return {
      search: '',
      methods: {
        onLogin: () => this.$store.commit('changeVisibilityLoginWindow', true),
        onRegistration: () =>
          this.$store.commit('changeVisibilityRegistrationWindow', true),
        onExit: () => this.$store.commit('changeActivity', false),
      },
    };
  },
  methods: {
    onSideIcon() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        this.$store.commit('changeMiniDrawer', !this.$store.state.miniDrawer);
        this.$store.commit('changeDrawer', true);
      } else {
        this.$store.commit('changeDrawer', !this.$store.state.openedDrawer);
        this.$store.commit('changeMiniDrawer', false);
      }
    },
  },
  computed: {
    links() {
      return this.$store.state.isActive ? USER_LINKS : GUEST_LINKS;
    },
  },
};
</script>

<style scoped></style>
