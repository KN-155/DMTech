<template>
  <v-container>
    <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
      <v-layout>
        <v-flex xs6 sm4>
          <v-img
            :src="
              user.avatar
                ? user.avatar
                : 'http://miano.pglu.ru/upload/default_avatar.png'
            "
            aspect-ratio="1"
          ></v-img>
          <v-btn
            color="deep-purple"
            class="mt-2"
            dark
            block
            @click="$refs.inputAvatar.click()"
            >Загрузить</v-btn
          >
        </v-flex>
        <v-flex xs6 sm8 class="px-2">
          <v-layout justify-space-between column fill-height>
            <div>
              <v-text-field
                label="Фамилия"
                single-line
                solo
                v-model="user.firstName"
              ></v-text-field>
              <v-text-field
                label="Имя"
                single-line
                solo
                v-model="user.lastName"
              ></v-text-field>
              <v-text-field
                label="Номер"
                single-line
                solo
                type="tel"
                mask="(##) ###-##-##"
                prefix="+375"
                color="deep-purple"
                v-model="user.number"
              ></v-text-field>
            </div>
            <div>
              <v-btn color="deep-purple right" class="mt-2" dark @click="onSave"
                >Сохранить</v-btn
              >
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
      <input
        class="image__file"
        type="file"
        accept=".jpg,.jpeg,.gif,.png,.bmp"
        ref="inputAvatar"
        @change="addAvatar"
      />
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    addAvatar() {
      const newPhotos = this.$refs.inputAvatar.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.user.avatar = e.currentTarget.result;
      };
      reader.readAsDataURL(newPhotos);
    },
    onSave() {
      this.$store.dispatch('UPDATE_USER', this.user);
    },
  },
  mounted() {
    const user = this.$store.getters.USER_INFO;
    this.user = { ...user };
  },
};
</script>

<style scoped>
.image__file {
  display: none;
}
</style>
