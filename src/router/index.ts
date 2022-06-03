import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Auth from './Auth';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: 'auth/login',
  },
  Auth,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
