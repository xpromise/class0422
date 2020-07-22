# webpack

## 核心概念

1. entry 入口
   指示 webpack 从哪个文件开始构建/打包
2. output 输出
   指示 webpack 打包完成的文件输出哪里去
3. loader 加载器
   webpack 自身能力有限，只能处理 js/json 文件，但是遇到 css/html 等文件就没办法处理
   loader 能将 webpack 不识别的文件编译加载成 webpack 能识别的文件，这样才能打包处理
4. plugin 插件
   功能比 loader 更加强大，增强 webpack 的功能
5. mode 模式
   development 开发环境
   production 生产环境

## 基本使用

1. 初始化 package.json
   npm init -y
2. 下载
   npm i webpack webpack-cli -D
3. 使用

- 开发模式
  `npx webpack ./src/js/index.js -o ./build/js/built.js --mode=development`
  能够处理 JS 文件（能将 ES6 模块化编译成浏览器能识别的语法）

- 生产模式
  `npx webpack ./src/js/index.js -o ./build/js/built.js --mode=production`
  能够处理 JS 文件（能将 ES6 模块化编译成浏览器能识别的语法）
  压缩 JS 代码

## 生产环境的准备工作

1. 为了保存开发环境&生产环境，需要定义两个配置文件

```
webpack.config.js
   -->
config/webpack.config.dev.js
config/webpack.config.prod.js
```

2. 注意：文件位置变了，路径也需要变化

- 相对路径
  - 相对路径是相对于项目运行目录的，不需要变化
- 绝对路径
  - 绝对路径是相对于当前文件的，现在文件位置发生了变化，所以需要回退一层

3. 生产环境配置：

- 删除 devServer，生产环境不需要 devServer
- 将 `mode: development` --> `mode: production`
- 将 `output.path: undefined` --> `output.path: build绝对路径` 因为要输出文件
- 将 `devtool: eval-cheap-module-source-map` --> `devtool: source-map`

4. 配置启动指令

```json
"scripts": {
   // npm start
   "start": "webpack-dev-server --config ./config/webpack.config.dev.js",
   // npm run build
   "build": "webpack --config ./config/webpack.config.prod.js"
},
```

## 提取 css 成单独文件

1. 使用 `mini-css-extract-plugin` 插件来完成功能
   过去会使用 `extract-text-webpack-plugin`, 现在弃用了

   注意插件用法比较特殊，分为两步：

   ```js
   plugins: [new MiniCssExtractPlugin()],  // 1
   module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // 'style-loader', // 不需要了，因为css文件已经被提取成单独文件了
          // 2
          MiniCssExtractPlugin.loader, // 将JS中的css提取成单独文件
          "css-loader", // 将css文件以CommonJS模块方案整合到JS中
          {
            loader: "less-loader", // 将less文件编译成css文件
            options: {
              // 修改配置
            },
          },
        ]
      },
    ],
   },
   ```

2. 此时 css 文件已经可以提取了，但是路径出了问题

```js
 plugins: [new MiniCssExtractPlugin({
    filename: './css/[name].css' // 此时才会进行css目录中
 })],
```

3. 但是运行代码时发现 html 中图片和 css 中图片始终不能统一
   根本原因：图片都是由 url-loader 处理的，所以生成的相对路径会一致
   此时不管如何改，因为 html 文件和 css 文件不再同一个目录下，所以相对路径始终出现问题

解决：改为 / 根路径，这样既能保证 url-loader 处理生成的路径一致，也能解决 html 文件和 css 文件不再同一个目录下路径不一致问题

```js
output: {
   ...
   publicPath: '/',
}
// 其他所有涉及到相对路径输出的路径，都要去掉 ./
// 如
new MiniCssExtractPlugin({
  filename: 'css/[name].css'
}
output: {
   filename: 'js/[name].js'
}
options: {
   name: 'imgs/[hash:10].[ext]'
}
```

这样修改后，所有输出路径都以 / 开头

4. 如果通过 VSCODE 打开访问，路径还是错误

- 下载
  npm i serve -g
- 使用
  serve -s build
- 功能
  启动一个服务器，将 build 目录当做根目录，下面资源会全部暴露出去
