<template>
  <v-flex xs12>
    <v-card height="100px" class="my-1">
      <v-layout>
        <v-flex xs4>
          <router-link tag="div" :to="'/ad/' + ad.id" class="pointer">
            <v-img :src="ad.photos[0] ? ad.photos[0] :'http://zabavnik.club/wp-content/uploads/Kartinka_3_26040225.png'" height="100px"></v-img>
          </router-link>
        </v-flex>
        <v-flex xs8 class="pa-2">
          <v-layout fill-height>
            <v-flex xs9 md10>
              <v-layout justify-space-between column fill-height>
                <div class="text-truncate">
                  <router-link
                    tag="span"
                    :to="'/ad/' + ad.id"
                    class="pointer title"
                    >{{ ad.title }}</router-link
                  >
                  <span class="caption grey--text ml-2">{{ ad.data }}</span>
                  <div class="subheading">
                    {{ ad.category }}/{{ ad.subcategory }}, {{ ad.city }}
                  </div>
                </div>

                <p class="text-truncate mb-0">{{ ad.description }}</p>
              </v-layout>
            </v-flex>
            <v-flex xs3 md2 v-if="this.$store.getters.USER">
              <v-layout align-end justify-space-between column fill-height>
                <v-btn
                  flat
                  icon
                  :color="favorite ? 'pink' : 'grey'"
                  @click="favorite = !favorite"
                  class="ma-0"
                >
                  <v-icon medium>favorite</v-icon>
                </v-btn>
                <div class="headline pr-1">{{ ad.price }}р</div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['ad'],
  computed: {
    favorite: {
      get() {
        return ~this.userFavorites.indexOf(this.ad.id);
      },
      set(value) {
        this.$store.dispatch('SET_FAVORITE', { value, id: this.ad.id });
      },
    },
    userFavorites() {
      return this.$store.getters.USER_FAVORITES;
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
