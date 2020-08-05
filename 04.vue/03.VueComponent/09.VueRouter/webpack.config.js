/*
  问题一：样式没办法正常显示
    原因：最新的css-loader是4.x.x版本，不能实现
    解决：要使用css-loader 3.x.x的版本
      npm i css-loader@3 -D

  问题二：当你修改JS代码，触发 CopyPlugin 的功能
    原因：会覆盖打包生成的html（ignore没有效果）  
      copy-webpack-plugin 6.x.x
    解决： 要使用copy-webpack-plugin 5.x.x的版本
      npm i copy-webpack-plugin@5 -D 
*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: undefined,
    filename: "js/[name].js",
  },
  module: {
    rules: [
      // loader配置
      // npm i vue-style-loader css-loader -D
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        include: [
          // 包含 src 目录下面的文件：只处理src下面的文件
          path.resolve(__dirname, "src"),
        ],
        use: ["vue-style-loader", "css-loader"],
      },
      {
        // npm i url-loader file-loader -D
        test: /\.(jpe?g|png|gif|webp)$/,
        include: [
          // 包含 src 目录下面的文件：只处理src下面的文件
          path.resolve(__dirname, "src"),
        ],
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          name: "static/media/[name].[hash:10].[ext]",
        },
      },
      {
        // npm i html-loader -D
        test: /\.(html)$/,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                // Attribute name
                attribute: "src",
                // Type of processing, can be `src` or `scrset`
                type: "src",
                // Allow to filter some attributes (optional)
                filter: (tag, attribute, attributes, resourcePath) => {
                  // 过滤除img标签以外的元素
                  // 只处理img图片
                  return tag.toLowerCase() === "img";
                },
              },
            ],
          },
        },
      },
      {
        test: /\.vue$/,
        include: [
          // 包含 src 目录下面的文件：只处理src下面的文件
          path.resolve(__dirname, "src"),
        ],
        loader: "vue-loader",
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      // npm i @babel/core babel-loader -D
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除 node_modules 不编译
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    // 自动引入打包生成的JS文件和CSS文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new VueLoaderPlugin(),
    // 克隆插件
    new CopyPlugin([
      {
        from: path.resolve(__dirname, "public"),
        to: path.resolve(__dirname, "dist"),
        // 忽略 index.html 不复制
        // 原因：因为 index.html 已经被 HtmlWebpackPlugin 处理过了
        ignore: ["index.html"],
      },
    ]),
  ],
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  // 开发server
  // npm i webpack-dev-server -D
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9527,
    host: "localhost",
    open: true,
    compress: true,
    hot: true, // 开启HMR功能：提升打包构建速度
    // 开启代理服务器, 设置目标服务器地址 'http://localhost:3000'
    proxy: {
      // 当你请求地址以/api开头，会转发到 http://localhost:3000
      // '/api': 'http://localhost:3000',
      // '/': 'http://localhost:3000' // 不行，

      "/api": {
        // 以 /api 开头的请求
        target: "http://localhost:3000", // 目标服务器地址
        pathRewrite: {
          // 重写路径
          "^/api": "", // 去掉/api
        },
        // changeOrigin: true
      },

      // '/api/v3': { // 以 /api 开头的请求
      //   target: 'http://localhost:4000', // 目标服务器地址
      //   pathRewrite: { // 重写路径
      //     '^/api': '' // 去掉/api
      //   },
      //   changeOrigin: true
      // }
    },
  },
  resolve: {
    // 自动补全文件扩展名
    extensions: [".js", ".vue", ".json"],
    // 配置路径别名
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
};
