<template>
    <v-navigation-drawer
            :clipped="$vuetify.breakpoint.lgAndUp"
            fixed
            app
            v-model="drawer"
            :mini-variant="mini"
    >
        <v-list>
            <v-list-tile
                    v-for="item in items"
                    :key="item.text"
                    :to="'/list/' + item.url"
                    active-class="deep-purple--text grey lighten-3"

            >
                <v-list-tile-action >
                    <v-icon large color="deep-purple" >{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title v-text="item.text"></v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
    export default {
        data(){
            return {
                items: [
                    { icon: 'whatshot', text: 'Горячее', url: 'hot' },
                    { icon: 'business', text: 'Недвижимость', url: 'realty' },
                    { icon: 'directions_car', text: 'Авто и мото', url: 'cars' },
                    { icon: 'format_paint', text: 'Ремонт и стройка', url: 'repairs' },
                    { icon: 'laptop_chromebook', text: 'Техника', url: 'equipment' },
                    { icon: 'person', text: 'Одежда', url: 'clothes' },
                    { icon: 'weekend', text: 'Для дома', url: 'house' },
                    { icon: 'pets', text: 'Животные', url: 'animals' },
                    { icon: 'local_florist', text: 'Растения', url: 'plants' },
                    { icon: 'school', text: 'Книги и учебники', url: 'books' },
                    { icon: 'fitness_center', text: 'Спорт и отдых', url: 'sport' },
                    { icon: 'apps', text: 'Прочее', url: 'other' },
                ]
            }
        },
        computed: {
            mini() {
                return this.$store.state.isMiniDrawer;
            },
            drawer: {
                get () {
                    return this.$store.state.isDrawer
                },
                set (value) {
                    this.$store.commit('changeDrawer', value)
                }
            }
        }
    }
</script>

<style scoped>

</style>