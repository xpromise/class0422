/*
  什么是模块？一个JS文件都是JS模块
  什么是模块化？ 将一个JS功能文件拆分多个小的JS功能文件，
    最终通过模块化语法组合在一起，形成完整功能

  模块化都有一个入口文件：
    1. 模块解析从入口文件开始解析
    2. 负责引入其他模块
  入口命名：
    index.js
    main.js  

  模块化语法：
    1. 引入（引入其他模块的内容，自己使用）
      require(模块路径)
        自己定义的模块（自定义模块）：模块路径必须以 ./ 或 ../ 开头，否则模块就找不到
        别人的模块（nodejs核心模块、通过npm下载的模块）：模块路径必须直接写模块名称
        模块路径的文件后缀名可以省略不写
          .js .json .node (只有这三种可以省略不写，其他文件必须写清楚文件后缀名)
    2. 暴露（将自己模块的内容暴露出去，给别人用）
      exports
      module.exports

      模块暴露的本质（模块向外到底暴露了什么？）
        module.exports 指向的值
        exports 是 module.exports 的简写
        （exports初始化时和module.exports指向同一个对象）

        如果模块内部只有一个功能需要暴露：通常使用module.exports = xxx
        如果模块内部有多个功能需要暴露：
          module.exports = { xxx, yyy, zzz }

          exports.xxx = xxx
          exports.yyy = yyy
          exports.zzz = zzz
*/
// Error: Cannot find module 'add.js'
// const Events = require('events');

// 对象解构赋值
const { add } = require("./add");
const sum = require("./sum");

// console.log(Events);

console.log("add", add);
console.log("sum", sum);

console.log(add(1, 2));
console.log(sum(1, 2, 3, 4));
