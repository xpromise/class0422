/*
  webpack打包的入口文件
    将App组件渲染到页面上
*/
import Vue from "vue";
// import Vue from "vue/dist/vue.esm.js";

// 引入App.vue
import App from "./App";
// 默认查找目录下面index.vue文件
import HelloVue from "./components/HelloVue";

// 引入样式文件
import "@assets/css/reset.css";
import "@assets/css/common.css";

// Vue的全局配置
Vue.config.productionTip = false; // 关闭生产提示

// 注册全局组件
/*
  注册组件时：组件名称一般采用大驼峰命名法
  最终组件使用时：
    <HelloVue />  推荐使用
    <HelloVue></HelloVue> 推荐使用
    <Hello-Vue></Hello-Vue>
    <hello-vue></hello-vue>
    <hello-vue />
*/
Vue.component("HelloVue", HelloVue);

new Vue({
  // el: "#app",
  // 帮你注册App组件，渲染 #app 容器内部去
  render: (h) => h(App),
  // components: {
  //   App
  // }
}).$mount("#app");

/*
  import Vue from 'vue' 引入的vue --> vue.runtime.esm.js
  vue.runtime.esm.js没有编译模板的能力
  解决：
    https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A
    1. 引入带 编译模板的能力 Vue的库  vue.esm.js
      import Vue from "vue/dist/vue.esm.js";

    2. 使用render方法（1. 使用上简单 2. 打包体积更小）
      import Vue from "vue";  // vue.runtime.esm.js
      render: (h) => h(App),
      // createElement具有编译模板的能力
      render: (createElement) => createElement(App)
 
*/
