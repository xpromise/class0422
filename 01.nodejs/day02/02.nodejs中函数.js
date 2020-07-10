/*
  在NODEJS中每一个JS模块都包裹了一层函数

  function (exports, require, module, __filename, __dirname) {}
    exports 用来暴露
    require 用来引入
    module module.exports 用来暴露
    __filename 文件绝对路径
    __dirname 文件夹绝对路径
*/

// console.log(arguments.callee.toString());
console.log(__filename); // C:\Users\XiongJian\Desktop\class0422\01.nodejs\day02\02.nodejs中函数.js
console.log(__dirname); // C:\Users\XiongJian\Desktop\class0422\01.nodejs\day02