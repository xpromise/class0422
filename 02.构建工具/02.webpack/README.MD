# webpack
## 核心概念
1. entry 入口
指示webpack从哪个文件开始构建/打包
2. output 输出
指示webpack打包完成的文件输出哪里去
3. loader 加载器
webpack自身能力有限，只能处理js/json文件，但是遇到css/html等文件就没办法处理
能将webpack不识别的文件编译加载webpack能识别的文件，这样才能打包处理
4. plugin 插件
功能比loader更加强大，增强webpack的功能
5. mode 模式
development 开发环境
production 生产环境

## 基本使用
1. 初始化package.json 
npm init -y
2. 下载
npm i webpack webpack-cli -D
3. 使用
- 开发模式
`npx webpack ./src/js/index.js -o ./build/js/built.js --mode=development`
能够处理JS文件（能将ES6模块化编译成浏览器能识别的语法）

- 生产模式
`npx webpack ./src/js/index.js -o ./build/js/built.js --mode=production`
能够处理JS文件（能将ES6模块化编译成浏览器能识别的语法）
压缩JS代码