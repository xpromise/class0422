(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function add(x, y) {
  return x + y;
}

module.exports = add;
},{}],2:[function(require,module,exports){
/*
  commonjs默认只能在nodejs平台使用
  浏览器要想使用需要通过browserify编译
  使用：
    1. 下载
      npm i browserify -g
    2. 编译
      browserify main.js -o built.js  
*/
const add = require("./add");

console.log(add(1, 1));

},{"./add":1}]},{},[2]);
