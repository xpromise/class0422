const { resolve } = require("path");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: resolve(__dirname, "../build"),
    filename: "client.js",
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
};
