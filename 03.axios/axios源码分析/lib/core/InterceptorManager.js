'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  // 将成功/失败回调添加到handlers
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  // 并返回对应的下标
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  // utils.forEach既能遍历对象也能遍历数组
  // utils.forEach(要遍历的元素，遍历时触发的函数)
  utils.forEach(this.handlers, function forEachHandler(h) {
    // h --> {fullfiled, rejected}
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;
