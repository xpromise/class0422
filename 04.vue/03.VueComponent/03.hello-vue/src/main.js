/*
  webpack打包的入口文件
    将App组件渲染到页面上
*/
import Vue from "vue";

// 引入App.vue
import App from "./App";
// 默认查找目录下面index.vue文件
import HelloVue from './components/HelloVue';

// 引入样式文件
import '@assets/css/reset.css';
import '@assets/css/common.css';

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
Vue.component('HelloVue', HelloVue);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
