import Vue from "vue";

import App from "./App";
// 直接引入，就会加载里面的代码
import "./elementUI";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
