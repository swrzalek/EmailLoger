/* eslint-disable max-len */
<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-lock"
                    type="text"
                    v-model="login"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn class="mx-3 mb-3" @click="handleSubmit()" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { fbsSignIn } from "../utils/firebase.service";

export default {
  data: () => ({
    login: "",
    password: ""
  }),
  methods: {
    async handleSubmit() {
      // eslint-disable-next-line no-unused-vars
      fbsSignIn(this.login, this.password);
    }
  },
  computed: {
    ...mapGetters(["user"]),
    nextRoute() {
      return "summary";
    }
  },
  watch: {
    user(auth) {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!auth.user) {
        this.$router.push("summary");
      }
    }
  }
};
</script>
