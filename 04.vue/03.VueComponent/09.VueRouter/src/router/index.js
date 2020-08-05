import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/home";
import About from "../pages/about";

// 安装插件 --> 扩展了两个全局组件
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 放置所有路由的配置
    // 每个路由配置都是一个对象
    {
      path: "/home", // 路由路径 -- 访问路径
      component: Home, // 路由组件，当地址变成 /home 要加载的组件
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/",
      // path: "", // 就是 /
      redirect: "/home", // 重定向，会将地址 / 改成 /home
    },
  ],
});

export default router;
