import { RouteNameEnum } from '@/types/enum/route/RouteNameEnum';
import { RouteConfig } from 'vue-router';

const routes: RouteConfig = {
  path: '/sales',
  name: 'Sales',
  component: () => import(/* webpackChunkName: "sales" */ '../../views/authed/Sales/index.vue'),
  children: [
    {
      path: 'plp',
      name: RouteNameEnum.PLP,
      component: () => import(/* webpackChunkName: "sales" */ '../../views/authed/Sales/PLP.vue'),
    },
  ],
};

export default routes;
