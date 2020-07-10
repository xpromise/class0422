/*
  模块化都有一个入口文件：
    1. 模块解析从入口文件开始解析
    2. 负责引入其他模块
  入口命名：
    index.js
    main.js  

  模块化语法：
    1. 引入（引入其他模块的内容，自己使用）
      require(模块路径)
    2. 暴露（将自己模块的内容暴露出去，给别人用）
      exports
      module.exports
*/

const add = require('./add.js');
const sum = require('./sum.js');

console.log('add', add);
console.log('sum', sum);

console.log(add.add(1, 2));
console.log(sum(1, 2, 3, 4));