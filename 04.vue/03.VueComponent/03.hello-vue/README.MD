# day04

## webpack 几个问题

问题一：样式没办法正常显示
原因：最新的 css-loader 是 4.x.x 版本，不能实现
解决：要使用 css-loader 3.x.x 的版本
npm i css-loader@3 -D

问题二：当你修改 JS 代码，触发 CopyPlugin 的功能
原因：会覆盖打包生成的 html（ignore 没有效果）  
 copy-webpack-plugin 6.x.x
解决： 要使用 copy-webpack-plugin 5.x.x 的版本
npm i copy-webpack-plugin@5 -D

    6.x.x 和 5.x.x 配置不一样，还需要修改插件配置

    new CopyPlugin([
      {
        from: path.resolve(__dirname, "public"),
        to: path.resolve(__dirname, "dist"),
        // 忽略 index.html 不复制
        // 原因：因为 index.html 已经被 HtmlWebpackPlugin 处理过了
        ignore: ["index.html"],
      },
    ])

## 省略文件扩展名

- webpack.config.js 配置

```js
resolve: {
  // 自动补全文件扩展名
  extensions: [".js", ".vue", ".json"],
},
```

## 简写文件路径

- webpack.config.js 配置

```js
resolve: {
  // 配置路径别名
  alias: {
    '@assets': path.resolve(__dirname, 'src/assets'),
  }
},
```

## 样式文件处理

- 正常情况下，组件样式是对全局生效的，容易导致样式冲突
- 加上 scoped 属性，可以让样式只对当前组件生效
- 公共样式定义在 assets/css/common.css 中即可

## 组件名称

定义时一般采用大驼峰命名法：HelloVue
使用时：
<HelloVue />
<HelloVue></HelloVue>
<Hello-Vue></Hello-Vue>
<hello-vue></hello-vue>
<hello-vue />
推荐使用：<HelloVue />
