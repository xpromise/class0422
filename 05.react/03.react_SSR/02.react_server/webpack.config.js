const { resolve } = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env", // 编译ES6简单语法
            "@babel/preset-react", // 编译jsx语法
          ],
          plugins: [
            // 解决class语法问题
            "@babel/plugin-proposal-class-properties",
          ],
        },
      },
    ],
  },
  mode: "production",
  resolve: {
    // 补全文件扩展名
    extensions: [".js", ".jsx", ".json"],
  },
  target: "node", // 构建的目标环境是 nodejs
  externals: [nodeExternals()], // 忽略所有node_modules不打包
};
