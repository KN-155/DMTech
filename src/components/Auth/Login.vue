<template>
  <v-dialog v-model="visibleWindow" persistent max-width="600px">
    <v-card>
      <v-toolbar dark color="deep-purple">
        <v-toolbar-title>Вход в систему</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="visibleWindow = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" v-model="valid" validation>
          <v-text-field
            color="deep-purple"
            prepend-icon="person"
            name="email"
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
          ></v-text-field>
          <v-text-field
            color="deep-purple"
            prepend-icon="lock"
            name="password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            counter
            v-model="password"
            :rules="passwordRules"
            :append-icon="showPassword ? 'visibility_off' : 'visibility'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark flat color="deep-purple" @click="onRegistration"
          >Регистрация</v-btn
        >
        <v-btn
          flat
          :dark="valid"
          color="deep-purple"
          @click="onSubmit"
          :disabled="!valid"
          >Войти</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  data() {
    return {
      email: '',
      password: '',
      valid: false,
      showPassword: false,
      emailRules: [
        v => !!v || 'Поле E-mail пустое',
        v => pattern.test(v) || 'E-mail должен быть действительным',
      ],
      passwordRules: [
        v => !!v || 'Поле пароля пустое',
        v => v.length >= 8 || 'Пароль должны содержать не менее 8-ми символов',
      ],
    };
  },
  computed: {
    visibleWindow: {
      get() {
        return this.$store.state.visibleLoginWindow;
      },
      set(value) {
        this.$store.commit('changeVisibilityLoginWindow', value);
      },
    },
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.$store.commit('changeActivity', true);
        this.visibleWindow = false;
      }
    },
    onRegistration() {
      this.visibleWindow = false;
      this.$store.commit('changeVisibilityRegistrationWindow', true);
    },
  },
};
</script>

<style scoped></style>
