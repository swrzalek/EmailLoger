<template>
  <div>
    <div class="mx-4 my-4" v-if="page == null">
      Strona ktorej szukasz nie istenieje. Napisz do nas na biuro@majkbud.pl .
    </div>
    <OfferOffice v-if="page === office"/>
    <OfferSchools v-if="page === schools"/>
  </div>
</template>
<script>
import { fbsCheckPermission, fbsLogOpen } from '../utils/firebase.service';
import { REDIRECT_URL } from '../utils/config';

export default {
  data: () => ({
    page: null,
  }),
  components: {
    OfferOffice: () => import('./OfferOffice'),
    OfferSchools: () => import('./OfferSchools'),
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      next();
      if (vm.$route.query.id) {
        // eslint-disable-next-line max-len
        fbsCheckPermission(vm.$route.query.id).then((response) => (response ? next() : window.location.replace(REDIRECT_URL)));
        fbsLogOpen(vm.$route.query.id);
      } else {
        fbsLogOpen();
      }
    });
  },
};
</script>
