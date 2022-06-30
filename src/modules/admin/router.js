// const Module = () => import('./Module.vue');
const PropertyDetail = () => import('./views/PropertyDetail.vue');
const PropertyList = () => import('./views/PropertyList.vue');
const Statistics = () => import('./views/Statistics.vue');

// import { NonAuthRequired } from '@/resources/auth';

const moduleRoute = {
  path: '/',
    //   component: Module,
    component: () => import("../../components/layout/Layout.vue"),
  // beforeEnter:(to, from, next) => {},
  // a general navigation gard for the entire module
  children: [
    {
      path: '/',
      name: 'property_list',
      component: PropertyList,
      // beforeEnter: NonAuthRequired,
    },
    {
      path: 'statistics',
      name: 'statistics',
      component: Statistics,
      // beforeEnter: NonAuthRequired,
    },
    {
      path: 'property/:id',
      name: 'property_detail',
      component: PropertyDetail,
    },
  ],
};

export default router => {
  router.addRoute(moduleRoute); // for single route registration
};
