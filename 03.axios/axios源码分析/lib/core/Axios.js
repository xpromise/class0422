'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  // 默认配置：实际上就是defaults模块
  this.defaults = instanceConfig;
  // 添加拦截器对象
  this.interceptors = {
    // 请求拦截器
    request: new InterceptorManager(),
    // 响应拦截器
    response: new InterceptorManager()
  };
}

/**
 * 发送请求的方法（axios只有一个真正发送请求的方法）
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // axios(url, config) --> request(url, config)
  // axios(config) --> request(config)
  // axios.get(url, config) --> request(config)
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  // 合并配置
  config = mergeConfig(this.defaults, config);

  // 设置请求方式
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    // 默认请求方式是GET
    config.method = 'get';
  }

  // dispatchRequest是发送请求的方法
  var chain = [dispatchRequest, undefined];
  // 一定是成功promise
  // config请求配置对象
  var promise = Promise.resolve(config);

  // 请求拦截器可以添加多个，后添加先执行
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    // interceptor 就是请求拦截器设置的成功/失败回调的对象
    // unshift往数组前面添加元素，返回值是添加后数组的长度
    // [fulfilled, rejected, dispatchRequest, undefined]
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  // 响应拦截器可以添加多个，先添加先执行
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    // interceptor 就是响应拦截器设置的成功/失败回调的对象
    // [fulfilled, rejected, dispatchRequest, undefined, fulfilled, rejected]
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  // chain = [fulfilled, rejected, dispatchRequest, undefined, fulfilled, rejected]
  while (chain.length) {
    /*
      第一次：promise成功的状态 --> 触发成功回调函数
      promise.then(fulfilled, rejected); // 请求拦截器
      触发request.fulfilled
      返回值是一个新promise，内部结果值 看 request.fulfilled 返回值
        结论：首先触发请求拦截器的成功的回调
            Promise.resolve(config) --> promise内部的值就是config --> 所以请求拦截器的成功的回调能接收到config参数
            dispatchRequest需要config参数 --> request.fulfilled需要return config
      
      return Promise.resolve(config)
        .then(request.fulfilled, request.rejected) // 第一次while
        .then(dispatchRequest, undefined) // 第二次while
        .then(response.fulfilled, response.rejected) // 第三次while
    */

    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

/**
 * 获取完整url地址（包含完整请求地址和请求查询字符串参数）
 * @param {*} config 
 */
Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// 遍历
// utils.forEach(要遍历的数组, 每次遍历触发的函数)
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;
