import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  //一级路由
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main.vue"),
    //二级路由
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "menu",
        name: "Menu",
        component: () => import("../views/Menu.vue"),
      },
      {
        path: "shopbag",
        name: "Shopbay",
        component: () => import("../views/Shopbag.vue"),
      },
      {
        path: "my",
        name: "My",
        component: () => import("../views/My.vue"),
      },
    ],
  },
  //路由重定向（打开默认跳转的页面）
  {
    path:"*",
    redirect:{
      name:"Home",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
