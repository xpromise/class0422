(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function add(x, y) {
  return x + y;
} // 默认暴露：只能暴露一个内容


var _default = add;
exports["default"] = _default;
},{}],2:[function(require,module,exports){
"use strict";

var _add = _interopRequireDefault(require("./add"));

var _person = require("./person");

var _math = require("./math");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
  ES6模块化
    1. 引入
      import xxx from '模块路径'

        模块路径必须符合commonjs模块化规范

    2. 暴露
      export
        默认暴露 export default xxx;
          只能暴露一个内容
          结论：将来模块如果只有一个内容需要暴露，就用默认暴露

        统一暴露 export { xxx, yyy }
          能够暴露多个内容
          结论：如果模块内很多代码，但是只要暴露其中部分，就用统一暴露

        分别暴露 export 完整定义
          能够暴露多个内容
          结论：如果模块内很多代码都需要暴露出去，就用分别暴露
    
      默认情况下：ES6模块化在浏览器是不识别的，需要编译
        1. babel
          将ES6以上语法编译成ES5以下语法
          将ES6模块化编译成Commonjs模块化

          下载
            npm init -y
            npm install --save-dev @babel/core @babel/cli @babel/preset-env
          配置
            package.json
              "babel": {
                "presets": [
                  "@babel/preset-env" 
                ]
              }
          运行  
            npx babel js -d build
              将js目录下所有文件进行编译，编译后将文件输出到build目录
              npx能够运行本地安装的包
              
        2. browserify
          将Commonjs模块化编译成浏览器能识别的语法
          browserify build/index.js -o build/built.js

*/
// 引入默认暴露的内容，直接写暴露的内容名称
// 引入分别/统一暴露的内容，必须通过解构赋值去使用
// 引入部分
// import * as person from "./person"; // 引入所有
// 引入暴露的name重命名为mathName
console.log(_add["default"]);
console.log(_person.name, _person.age);
console.log(_math.count, _math.mul, _math.name);
},{"./add":1,"./math":3,"./person":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;
exports.mul = mul;
exports.name = void 0;

function count(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

var name = 'rose'; // 统一暴露：后面跟一个对象，对象里面放置暴露的内容

exports.name = name;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAge = setAge;
exports.sex = exports.age = exports.name = void 0;
// 分别暴露：后面必须跟完整定义
var name = 'jack';
exports.name = name;
var age = 18;
exports.age = age;
var sex = '男';
exports.sex = sex;

function setAge() {}

;
},{}]},{},[2]);
