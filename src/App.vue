<template>
  <v-app>
    <router-view></router-view>
      <Footer v-if="auth.isAuthenticated"/>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Footer: () => import('./components/Footer.vue'),
  },
  computed: {
    ...mapState(['auth']),
  },
};
</script>
