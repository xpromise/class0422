// Nodejs中每一个JS文件都可以看做一个JS模块
// 每个JS模块的代码默认对外不可见的
// 外面如果需要使用JS模块中功能代码，JS模块需要暴露这个功能出去

// 定义模块功能
function add(x, y) {
  return x + y;
}

// 暴露功能出去
// 暴露语法：exports 对象 
// 暴露出去是一个对象，对象里面有add方法
exports.add = add;