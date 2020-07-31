/*
  webpack打包的入口文件
    将App组件渲染到页面上
*/
import Vue from 'vue';

// 引入App.vue
import App from './App.vue';

new Vue({
  el: '#app',
  render: (h) => h(App)
})