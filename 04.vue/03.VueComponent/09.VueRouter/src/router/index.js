import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/home";
import About from "../pages/about";
import Messages from "../pages/messages";
import News from "../pages/news";
import Detail from "../pages/detail";

// 安装插件 --> 扩展了两个全局组件
Vue.use(VueRouter);

const router = new VueRouter({
  // mode: "hash",
  mode: "history",
  routes: [
    // 放置所有路由的配置
    // 每个路由配置都是一个对象
    {
      path: "/home", // 路由路径 -- 访问路径
      component: Home, // 路由组件，当地址变成 /home 要加载的组件
      name: "home", // 给路由取名字
      children: [
        // 嵌套路由 / 子路由
        {
          path: "/home/messages",
          component: Messages,
          children: [
            {
              /*
                正常path-component是 1对1的关系
                  一个路径对应一个组件
                需求：多个路径对应一个组件  
                  '/home/messages/detail/xxx' 地址就是写死的
                    xxx只能匹配xxx地址
                  '/home/messages/detail/:xxx' 地址就是动态的
                    :xxx能匹配任意地址
              */
              path: "/home/messages/detail/:id",
              component: Detail,
              // 命名路由：给路由取一个名字（将来通过名称使用路由）
              name: "detail",
              props: function(route) {
                console.log("router", route); // $route
                // 返回值对象，对象里面的数据就会以props方式传递到当前组件中
                return {
                  ...route.params,
                  ...route.query,
                };
              },
            },
          ],
        },
        {
          /*
            news --> /home/news
            /news --> /news
          */
          path: "news",
          component: News,
        },
      ],
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
