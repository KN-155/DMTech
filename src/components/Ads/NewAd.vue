<template>
  <v-dialog v-model="visibleWindow" persistent max-width="600px">
    <v-card>
      <v-form ref="form" v-model="valid" validation>
        <v-card-title>
          <span class="headline">Добавить товар</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  label="Название"
                  color="deep-purple"
                  placeholder="Например, ноутбук Lenovo"
                  hint='Название товара не может содержать слова "Продам", "Куплю" и т.п.'
                  v-model="product.title"
                  :rules="[rules.min(5), rules.max(25)]"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="categories"
                  label="Категория"
                  v-model="product.category"
                  color="deep-purple"
                  placeholder="Выбрать категорию"
                  :rules="[rules.req]"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :disabled="!product.category"
                  :items="selectSubcategory"
                  label="Подкатегория"
                  color="deep-purple"
                  placeholder="Выбрать подкатегорию"
                  v-model="product.subcategory"
                  :rules="[rules.req]"
                ></v-select>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  label="Номер"
                  type="tel"
                  mask="(##) ###-##-##"
                  prefix="+375"
                  color="deep-purple"
                  v-model="product.number"
                  :rules="[rules.req]"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  label="Цена"
                  suffix="BYN"
                  color="deep-purple"
                  v-model="product.price"
                  :rules="[rules.req, rules.num]"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  label="Город"
                  color="deep-purple"
                  v-model="product.city"
                  :rules="[rules.req]"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  label="Описание"
                  auto-grow
                  rows="4"
                  color="deep-purple"
                  placeholder="Минимум 10 знаков - максимум 1000 знаков"
                  v-model="product.description"
                  :counter="1000"
                  :rules="[rules.min(10), rules.max(1000)]"
                ></v-textarea>
              </v-flex>
              <v-flex xs12>
                <v-layout row wrap>
                  <v-flex v-for="(photo, i) in photos" :key="i" xs6 md4>
                    <v-card>
                      <v-img
                        :src="photo"
                        :lazy-src="
                          `http://zabavnik.club/wp-content/uploads/Kartinka_3_26040225.png`
                        "
                        aspect-ratio="1.5"
                      >
                      </v-img>
                    </v-card>
                  </v-flex>
                  <v-flex xs6 md4>
                    <v-card
                      @click="$refs.inputImg.click()"
                      class="pointer"
                      v-if="photos.length < 6"
                    >
                      <v-img
                        :src="
                          'http://zabavnik.club/wp-content/uploads/Kartinka_3_26040225.png'
                        "
                        aspect-ratio="1.5"
                      >
                      </v-img>
                    </v-card>
                  </v-flex>
                  <input
                    class="image__file"
                    type="file"
                    accept=".jpg,.jpeg,.gif,.png,.bmp"
                    multiple
                    ref="inputImg"
                    @change="addPhotos"
                  />
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="deep-purple darken-1"
            flat
            @click="visibleWindow = false"
            >Закрыть</v-btn
          >
          <v-btn color="deep-purple darken-1" flat @click="createAd"
            >Опубликовать</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { CATEGORY } from '../../constants';

export default {
  data() {
    return {
      categories: CATEGORY,
      categoryIndex: -1,
      photos: [],
      product: {
        title: '',
        category: '',
        subcategory: '',
        number: '',
        price: '',
        city: '',
        description: '',
        photos: [],
      },
      valid: false,
      rules: {
        req: v => !!v || 'Строка не заполнена',
        min: n => v =>
          v.length >= n || `Должно быть введено минимум ${n} символов`,
        max: n => v => v.length <= n || `Необходимо колличество символов`,
        num: v =>
          Number(v) == v || 'Превышенно допустимое колличество символов',
      },
    };
  },
  methods: {
    addPhotos() {
      const newPhotos = this.$refs.inputImg.files;
      for (let i = 0; i < newPhotos.length; i++) {
        if (this.photos.length + i < 6) {
          this.product.photos.push(newPhotos[i]);
          const reader = new FileReader();
          reader.onload = e => this.photos.push(e.currentTarget.result);
          reader.readAsDataURL(newPhotos[i]);
        }
      }
    },
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          ...this.product,
          photos: [...this.photos], //test
        };
        this.$store.dispatch('CREATE_AD', ad);
        this.visibleWindow = false;
        this.product = {
          title: '',
          category: '',
          subcategory: '',
          number: '',
          price: '',
          city: '',
          description: '',
          photos: [],
        };
      }
    },
  },
  computed: {
    visibleWindow: {
      get() {
        return this.$store.getters.VISIBLE_NEW_AD_WINDOW;
      },
      set(value) {
        this.$store.dispatch('CHANGE_VISIBILITY_NEW_AD_WINDOW', value);
      },
    },
    selectSubcategory() {
      const subcategoryIndex = this.categories.findIndex(
        item => item.text === this.product.category,
      );
      return ~subcategoryIndex
        ? this.categories[subcategoryIndex].subcategory
        : [];
    },
  },
};
</script>

<style scoped>
.image__file {
  display: none;
}

.pointer {
  cursor: pointer;
}
</style>
