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
        use: ["vue-style-loader", "css-loader"],
      },
      {
        // npm i url-loader file-loader -D
        test: /\.(jpe?g|png|gif|webp)$/,
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
                  // The `tag` argument contains a name of the HTML tag.
                  // The `attribute` argument contains a name of the HTML attribute.
                  // The `attributes` argument contains all attributes of the tag.
                  // The `resourcePath` argument contains a path to the loaded HTML file.

                  // choose all HTML tags except img tag
                  return tag.toLowerCase() === "img";
                },
              },
            ],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      // npm i @babel/core babel-loader -D
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new VueLoaderPlugin(),
    // 克隆插件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "dist"),
          globOptions: {
            // 忽略 index.html 不复制
            // 原因：因为 index.html 已经被 HtmlWebpackPlugin 处理过了
            ignore: ["index.html"],
          },
        },
      ],
    }),
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
  },
  resolve: {
    // 自动补全文件扩展名
    extensions: [".js", ".vue", ".json"],
  },
};
