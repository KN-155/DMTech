<template>
  <v-dialog v-model="visibleWindow" persistent max-width="600px">
    <v-card>
      <v-toolbar dark color="deep-purple">
        <v-toolbar-title>Регистрация</v-toolbar-title>
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
          <v-text-field
            color="deep-purple"
            prepend-icon="lock"
            name="confirm-password"
            label="Confirm Password"
            :type="showPassword ? 'text' : 'password'"
            counter
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            :append-icon="showPassword ? 'visibility_off' : 'visibility'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark flat color="deep-purple" @click="onLogin">Вход</v-btn>
        <v-btn
          flat
          :dark="valid"
          color="deep-purple"
          @click="onSubmit"
          :disabled="!valid"
          >Создать аккаунт</v-btn
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
      confirmPassword: '',
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
      confirmPasswordRules: [
        v => !!v || 'Поле пароля пустое',
        v => v === this.password || 'Пароли не совпадают"',
      ],
    };
  },
  computed: {
    visibleWindow: {
      get() {
        return this.$store.state.visibleRegistrationWindow;
      },
      set(value) {
        this.$store.commit('changeVisibilityRegistrationWindow', value);
      },
    },
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.visibleWindow = false;
      }
    },
    onLogin() {
      this.visibleWindow = false;
      this.$store.commit('changeVisibilityLoginWindow', true);
    },
  },
};
</script>

<style scoped></style>
