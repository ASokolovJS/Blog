import Vue from 'vue'
import Router from 'vue-router'
import createPost from './views/createPost'
import viewPost from './views/viewPost'
import editPost from './views/editPost'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: () => import('./views/postList.vue'),
  },
  {
    path: '/createPost',
    component: createPost,
  },
  {
    path: '/viewPost',
    component: viewPost
  },
  {
    path: "/editPost",
    component: editPost
  },
  ]
})