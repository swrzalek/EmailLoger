/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/summary',
    name: 'summary',
    component: () => import('../views/Summary.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/email',
    name: 'Email',
    component: () => import('../views/EmailCreator.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/offer',
    name: 'Offer',
    component: () => import('../views/Offer.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const test = store.state.auth;
  console.log(test);
  // eslint-disable-next-line dot-notation
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // eslint-disable-next-line no-extra-boolean-cast
    console.log('Authentication required');
    next();
  }
  next();
});

export default router;
