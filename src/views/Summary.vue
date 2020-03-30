<template>
<div>
    <v-container>
    <h1>{{this.$route.name}}</h1>
    <v-row>
        <v-col
           cols="12"
           sm="12"
        >
            <data-table :logs="allLogs" />
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
  }),
  components: {
    dataTable: () => import('../components/DataTable'),
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
