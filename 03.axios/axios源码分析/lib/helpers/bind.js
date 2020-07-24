'use strict';
/*
  fn: Axios.prototype.request
  thisArg: context 真正实例对象
*/
module.exports = function bind(fn, thisArg) {
  return function wrap() {
    // 将arguments伪数组变成args真数组
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    // 一旦调用wrap，实际调用的是request
    // 并且将 request 方法this指向 真正实例对象
    return fn.apply(thisArg, args);
  };
};
