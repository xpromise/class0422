/*
  webpack配置文件
  所有构建工具都基于nodejs平台运行，所以采用commonjs模块化

  loader用法：
    1. 确定干什么事
    2. 去 https://webpack.docschina.org/loaders/ 官网找loader
    3. 下载loader
      官网提供的下载不一定是所有的包
    4. 配置

  常见错误：
    1. Module not found: Error: Can't resolve 'style-loader' in xxx
      模块没有找到，就是没有下载
      解决：npm i style-loader -D
*/
const path = require("path");

module.exports = {
  // 配置对象：属性名固定的对象
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "build"), // 目录
    filename: "./js/built.js", // 文件名
  },
  module: {
    rules: [
      // 各种loader的配置
      {
        test: /\.less$/, // 检测文件是否是less，是的话就会被下面规则处理
        use: [
          // 执行顺序：从下往上，从右往左依次同步执行
          // loader写法：如果需要修改loader的配置，用对象，如果使用loader默认配置，直接写loader名称
          "style-loader", // 将JS中css模块代码以style标签的方式插入到页面中
          "css-loader", // 将css文件以CommonJS模块方案整合到JS中
          {
            loader: "less-loader", // 将less文件编译成css文件
            options: {
              // 修改配置
            },
          },
        ],
      },
    ],
  },
  mode: "development",
};
