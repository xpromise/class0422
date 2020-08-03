import Vue from "vue";

import App from "./App";

Vue.config.productionTip = false;

// console.log("Vue", Vue.prototype);

const vm = new Vue({
  render: (h) => h(App),
}).$mount("#app");

// console.log("vm", vm);

// console.log(vm.__proto__ === Vue.prototype);
