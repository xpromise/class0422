/*
  1. npm init
    初始化package.json，需要指定配置
  2. npm init -y
    初始化package.json，使用默认配置

    注意：先要初始化package.json，再开始下载包
  
  3. npm install / i xxx  下载xxx包
    这个包会下载到 node_modules 中
    package-lock.json 下载包的缓存文件
    下载的包自动添加 package.json 中的依赖

    npm i xxx -S 下载包并添加到生产依赖
    npm i xxx -D 下载包并添加到开发依赖
    npm i        下载所有依赖包
    npm i xxx -g  全局下载包，作为指令使用
      注意不是通过require使用，而是作为指令使用
 
  4. npm remove / r xxx 删除xxx包  

*/  
const $ = require('jquery');
