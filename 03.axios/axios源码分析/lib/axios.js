'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  // context才是真正Axios的实例对象
  var context = new Axios(defaultConfig);
  // instance是一个函数，调用函数实际上调用的是 request 方法，并且this指向 context
  var instance = bind(Axios.prototype.request, context);

  // instance能够使用方法（get/post..），属性（defaults/interceptors）
  // 复制  Axios.prototype 的方法 到 instance
  utils.extend(instance, Axios.prototype, context);
  // 复制 context 的属性 到 instance
  utils.extend(instance, context);

  return instance;
}

// 创建axios
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// 创建instance并返回
// instance和axios有区别：axios功能更加强大
axios.create = function create(instanceConfig) {
  // mergeConfig 合并配置：如果配置有相同的，后面的会覆盖掉前面的
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// 向外暴露axios，所以引入axios库可以直接使用axios
module.exports = axios;
module.exports.default = axios;
