<template>
<div>
    <v-container>
    <h1>{{this.$route.name}}</h1>
    <v-row>
        <v-col
           cols="12"
           sm="8"
        >
            <data-table :logs="allLogs" />
        </v-col>
        <v-col
        cols="12"
        sm="4">
            <card-button :data='card.generator'/>
        </v-col>
    </v-row>
    </v-container>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import store from '../store';
import { FETCH_LOGS } from '../store/actions.type';

export default {
  data: () => ({
    card: {
      generator: {
        icon: 'mdi-email-outline',
        name: 'Generator',
        path: '/email',
      },
    },
  }),
  components: {
    dataTable: () => import('../components/DataTable'),
    cardButton: () => import('../components/CardButton'),
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch(FETCH_LOGS).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(['allLogs']),
  },
};
</script>
