import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SkillsView from './views/SkillsView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
    },
    // {
    //   path: '/details/:id',
    //   name: 'details',
    //   props: true,
    //   component: () => import(/* webpackChunkName: "details" */ './components/Details.vue')
    // },
    // {
    //   path: '/post',
    //   name: 'post',
    //   component: () => import(/* webpackChunkName: "post" */ './components/Post.vue')
    // }
  ],
});
