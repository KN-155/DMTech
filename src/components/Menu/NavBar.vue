<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" app fixed>
    <template v-if="!openedSearch">
      <v-toolbar-side-icon
        class="hidden-lg-and-up"
        @click.stop="onSideIcon"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link tag="span" to="/" class="hidden-sm-and-down pointer"
          >Доска Объявлений</router-link
        >
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
      <v-btn icon class="hidden-md-and-up" @click.stop="openedSearch = true">
        <v-icon>search</v-icon>
      </v-btn>
      <v-menu offset-y left>
        <v-btn icon large slot="activator">
          <v-avatar size="36px" color="deep-purple">
            <img
              v-if="this.$store.getters.USER && this.$store.getters.USER.avatar"
              :src="this.$store.getters.USER.avatar"
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
    </template>
    <template v-else>
      <v-text-field
        append-icon="clear"
        v-model="search"
        single-line
        full-width
        hide-details
        color="deep-purple"
        @click:append="openedSearch = false"
        label="Поиск"
      ></v-text-field>
    </template>
  </v-toolbar>
</template>

<script>
import { USER_LINKS, GUEST_LINKS } from '../../constants';

export default {
  data() {
    return {
      search: '',
      openedSearch: false,
      methods: {
        onLogin: () =>
          this.$store.dispatch('CHANGE_VISIBILITY_LOGIN_WINDOW', true),
        onRegistration: () =>
          this.$store.dispatch('CHANGE_VISIBILITY_REGISTRATION_WINDOW', true),
        onExit: () => this.$store.dispatch('LOG_OUT'),
      },
    };
  },
  methods: {
    onSideIcon() {
      this.$store.dispatch('CHANGE_DRAWER', !this.$store.getters.OPENED_DRAWER);
    },
  },
  computed: {
    links() {
      return this.$store.getters.USER ? USER_LINKS : GUEST_LINKS;
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
