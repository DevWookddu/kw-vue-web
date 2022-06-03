import { RouteNameEnum } from '@/types/enum/route/RouteNameEnum';
import { RouteConfig } from 'vue-router';

const routes: RouteConfig = {
  path: '/auth',
  name: 'Auth',
  component: () => import(/* webpackChunkName: "auth" */ '../views/auth/index.vue'),
  children: [
    {
      path: 'login',
      name: RouteNameEnum.로그인,
      component: () => import(/* webpackChunkName: "auth" */ '../views/auth/Login.vue'),
    },
    {
      path: 'join',
      name: RouteNameEnum.회원가입,
      component: () => import(/* webpackChunkName: "auth" */ '../views/auth/Join.vue'),
    },
  ],
};

export default routes;
