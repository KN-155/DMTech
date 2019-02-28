<template>
  <v-container>
    <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3  v-if="ad">
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 sm6 v-if="ad.photos.length">
            <v-carousel hide-delimiters height="250px">
              <v-carousel-item
                v-for="(item, i) in ad.photos"
                :key="i"
                :src="item"
              ></v-carousel-item>
            </v-carousel>
          </v-flex>
          <v-flex xs12 :sm6="ad.photos.length">
            <v-layout justify-space-between column fill-height>
              <div>
                <v-layout class="mt-1" justify-space-between row align-end>
                  <v-flex class="display-1">{{ ad.title }}</v-flex>
                  <span class="caption grey--text">{{ ad.data }}</span>
                </v-layout>
                <div>
                  <span class="title">Категория: </span
                  ><span class="subheading"
                    >{{ ad.category }}/{{ ad.subcategory }}</span
                  >
                </div>
                <div>
                  <span class="title">Местоположение: </span
                  ><span class="subheading">{{ ad.city }}</span>
                </div>
                <div>
                  <span class="title">Номер: </span
                  ><span class="subheading">{{ ad.number }}</span>
                </div>
              </div>

              <v-layout class="mt-2" justify-space-between row align-end>
                <v-flex class="title">Цена: </v-flex>
                <span class="display-2">{{ ad.price }}р</span>
              </v-layout>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <div class="title mb-2">Описание:</div>
            <p>{{ ad.description }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.AD_BY_ID(+id);
    },
  },
};
</script>

<style scoped>
</style>
