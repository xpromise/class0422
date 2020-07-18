/*
  ES6模块化
    1. 引入
      import xxx from '模块路径'

        模块路径必须符合commonjs模块化规范

    2. 暴露
      export
        默认暴露 export default xxx;
          只能暴露一个内容
          结论：将来模块如果只有一个内容需要暴露，就用默认暴露

        统一暴露 export { xxx, yyy }
          能够暴露多个内容
          结论：如果模块内很多代码，但是只要暴露其中部分，就用统一暴露

        分别暴露 export 完整定义
          能够暴露多个内容
          结论：如果模块内很多代码都需要暴露出去，就用分别暴露
       
      as 用来重命名    
    
      默认情况下：ES6模块化在浏览器是不识别的，需要编译
        1. babel
          将ES6以上语法编译成ES5以下语法
          将ES6模块化编译成Commonjs模块化

          下载
            npm init -y
            npm install --save-dev @babel/core @babel/cli @babel/preset-env
          配置
            package.json
              "babel": {
                "presets": [
                  "@babel/preset-env" 
                ]
              }
          运行  
            npx babel js -d build
              将js目录下所有文件进行编译，编译后将文件输出到build目录
              npx能够运行本地安装的包
              
        2. browserify
          将Commonjs模块化编译成浏览器能识别的语法
          browserify build/index.js -o build/built.js

*/
// 引入默认暴露的内容，直接写暴露的内容名称
import add from "./add";
// 引入分别/统一暴露的内容，必须通过解构赋值去使用
import { name, age } from "./person"; // 引入部分
// import * as person from "./person"; // 引入所有

// 引入暴露的name重命名为mathName
import { count, mul, name as mathName } from "./math";

console.log(add);
console.log(name, age );
console.log(count, mul, mathName);
