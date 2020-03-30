<template>
    <div>
        <offer/>
    </div>
</template>
<script>
import { fbsCheckPermission, fbsLogOpen } from '../utils/firebase.service';
import { REDIRECT_URL } from '../utils/config';

export default {
  components: {
    Offer: () => import('./Offer'),
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      next();
      if ((vm.$route.query.id)) {
        fbsCheckPermission(vm.$route.query.id)
          .then((response) => (response ? next() : window.location.replace(REDIRECT_URL)));
        fbsLogOpen(vm.$route.query.id);
      } else {
        fbsLogOpen();
      }
    });
  },
  data: () => ({

  }),
};
</script>
