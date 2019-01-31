<template>
    <v-toolbar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            fixed
    >
        <v-toolbar-side-icon @click.stop="onSideIcon"></v-toolbar-side-icon>
        <v-toolbar-title >

            <span class="hidden-sm-and-down">DMTech Shop</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
                color="deep-purple"
                flat
                solo
                hide-details
                prepend-inner-icon="search"
                label="Поиск"
                class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>notifications</v-icon>
        </v-btn>
        <v-menu offset-y left>
            <v-btn
                    icon
                    large
                    slot="activator"
            >
                <v-avatar size="32px" tile>
                    <img
                            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                            alt="Vuetify"
                    >
                </v-avatar>
            </v-btn>
            <v-list>
                <v-list-tile
                        v-for="(item, index) in items"
                        :key="index"
                        :to="item.url"
                        active-class="deep-purple--text"
                >
                    <v-list-tile-action>
                        <v-icon left >{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>

            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    { title: 'Профиль', icon: 'account_circle', url: '/profile'},
                    { title: 'Мои объявления', icon: 'view_list', url: '/ads'},
                    { title: 'Корзина', icon: 'shopping_cart', url: '/orders'},
                    { title: 'Настройки', icon: 'settings', url: '/setting'},
                    { title: 'Выйти', icon: 'exit_to_app', url: '/logout'},
                    { title: 'Регистрация', icon: 'face', url: '/registration' },
                    { title: 'Вход', icon: 'lock', url: '/login' }
                ]
            }
        },
        methods: {
            onSideIcon() {
                if(this.$vuetify.breakpoint.lgAndUp) {
                    this.$store.commit('changeMiniDrawer', !this.$store.state.isMiniDrawer);
                    this.$store.commit('changeDrawer', true);
                } else {
                    this.$store.commit('changeDrawer', !this.$store.state.isDrawer);
                    this.$store.commit('changeMiniDrawer', false);
                }
            }
        }
    }
</script>

<style scoped>

</style>