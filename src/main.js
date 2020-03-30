import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { auth } from './plugins/firebase';
import { UPDATE_USER } from './store/actions.type';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    auth.onAuthStateChanged((user) => {
      store.dispatch(UPDATE_USER, { user });
    });
  },
}).$mount('#app');
