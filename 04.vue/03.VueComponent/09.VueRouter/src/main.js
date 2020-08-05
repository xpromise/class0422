import Vue from "vue";

import App from "./App";

import router from './router';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注入router，所有组件实例对象就可以使用
  router
}).$mount("#app");


