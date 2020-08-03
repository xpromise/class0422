import Vue from "vue";

import App from "./App";

Vue.config.productionTip = false;

// Vue.prototype.$bus = vm;

new Vue({
  beforeCreate() {
    console.log('Vue beforeCreate');
    /*
      1. 属性只要添加一次，一定考虑初始化4个生命周期函数
      2. 必须在 mounted 之前（mouted之前是子组件渲染，子组件要使用）
      3. beforeCreate，希望越早绑定越好
      4. this就是vm
    */
    Vue.prototype.$bus = this;
  },
  // created() {
  //   console.log('Vue created');
  // },
  // beforeMount() {
  //   console.log('Vue beforeMount');
  // },
  // mounted() {
  //   console.log('Vue mounted');
  // },
  render: (h) => h(App),
}).$mount("#app");


// Vue.prototype.$globalEventBus = vm;
