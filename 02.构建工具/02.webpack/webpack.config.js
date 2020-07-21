/*
  webpack配置文件
  所有构建工具都基于nodejs平台运行，所以采用commonjs模块化

  loader用法：
    1. 确定干什么事
    2. 去 https://webpack.docschina.org/loaders/ 官网找loader
    3. 下载loader
      官网提供的下载不一定是所有的包
    4. 配置

  plugins用法：
    1. 确定干什么事
    2. 去 https://webpack.docschina.org/plugins/ 官网找plugin
    3. 下载loader
      官网提供的下载不一定是所有的包
    4. 引入插件  
    5. 配置

  常见错误：
    1. Module not found: Error: Can't resolve 'style-loader' in xxx
      模块没有找到，就是没有下载
      解决：npm i style-loader -D
    2. Error: Cannot find module 'file-loader'  
      模块没有找到，就是没有下载
      解决：npm i file-loader -D
*/
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      {
        test: /\.(png|jpe?g|gif|wepb)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 小于12kb以下的图片会被base64处理
              // 转化成base64 data url文本
              // 优点：减少请求数量 缺点：体积更大
              limit: 12 * 1024,
              // [hash:10] -- hash值取10位
              // [ext] -- 源文件扩展名
              name: "./imgs/[hash:10].[ext]",
            },
          },
        ],
      },
      // 处理html中的img
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    // 处理html文件
    // 自动引入打包生成js和css
    new HtmlWebpackPlugin({
      // 以 './src/index.html' 为模板创建新html文件
      // 新文件会有源文件的结构，自动引入打包生成js和css
      template: './src/index.html'
    })
  ],
  mode: "development",
};
