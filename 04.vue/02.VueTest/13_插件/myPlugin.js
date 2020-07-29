/*
  Vue插件：扩展Vue的功能
    扩展Vue全局功能：通过 Vue 直接使用
      Vue.filter / Vue.directive
    扩展Vue局部功能：通过 实例（vm/this） 使用

    语法：
      1. 定义成对象
      2. 定义成函数
*/

// const myPlugin = {};
// 当你应用 myPlugin 插件时，内部会调用 install 方法
// myPlugin.install = function (Vue) {
//   // 1. 扩展Vue全局功能
//   Vue.globalMethod = function () {
//     console.log('globalMethod()');
//   }

//   // 2. 扩展Vue局部功能
//   Vue.prototype.$vmMethod = function () {
//     console.log('$vmMethod()');
//   }

//   // 3. 扩展其他功能
//   // 自定义过滤器
//   Vue.filter("timeFormat", function (
//     value,
//     formatStr = "YYYY-MM-DD HH:mm:ss"
//   ) {
//     return dayjs(value).format(formatStr);
//   });

//   // 自定义指令
//   Vue.directive('upper-case', function (el, binding) {
//     el.textContent = binding.value.toUpperCase();
//   })

// }

function myPlugin(Vue) {
  // 1. 扩展Vue全局功能
  Vue.globalMethod = function () {
    console.log("globalMethod()");
  };

  // 2. 扩展Vue局部功能
  Vue.prototype.$vmMethod = function () {
    console.log("$vmMethod()");
  };

  // 3. 扩展其他功能
  // 自定义过滤器
  Vue.filter("timeFormat", function (value, formatStr = "YYYY-MM-DD HH:mm:ss") {
    return dayjs(value).format(formatStr);
  });

  // 自定义指令
  Vue.directive("upper-case", function (el, binding) {
    el.textContent = binding.value.toUpperCase();
  });
}
