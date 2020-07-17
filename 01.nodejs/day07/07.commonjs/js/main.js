/*
  commonjs默认只能在nodejs平台使用
  浏览器要想使用需要通过browserify编译
  使用：
    1. 下载
      npm i browserify -g
    2. 编译(只要编译主文件)
      browserify main.js -o built.js  
*/
const add = require("./add");

console.log(add(1, 1));
