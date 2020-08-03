/*
  引入App组件，渲染到页面上
*/
import Vue from 'vue';

import App from './App';

Vue.config.productionTip = false; // 关闭生产提示

new Vue({
  // 将App组件渲染到页面上
  render: (h) => h(App)
  // 挂载到 #app 容器中
}).$mount('#app');