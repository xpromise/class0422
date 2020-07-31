//对象方式注册插件
/* const plugin = {};
plugin.install = function () {}; */

//函数方式定义插件
function plugin(Vue) {
  //定义全局方法函数
  Vue.globalMethod = function () {
    console.log("globalMethod()");
  };
  //扩展局部方法函数
  Vue.prototype.$partMethod = function () {
    console.log("$partMethod()");
  };
  //定义全局时间过滤器
  Vue.filter("timeFormat", function (value, dateStr = "YYYY-MM-DD HH:mm:ss") {
    return dayjs(value).format(dateStr);
  });
  //定义全局自定义指令
  Vue.directive("upper-case", function (el, binding) {
    el.textContext = binding.value.toUpperCase();
    // el.textContent = "123";
    console.log(binding.value.toUpperCase());
  });
}
