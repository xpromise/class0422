/*
  1. 初始化package.json
    npm init -y
      包名不能有中文、不能叫gulp
  2. 下载
    npm i gulp-cli -g
    npm i gulp -D    
  3. 初始化gulp的配置文件：gulpfile.js  
    名称不能修改
    当你将来运行gulp指令，会自动查找的配置文件
  
  4. gulp工作流程
    1. 确定要干什么工作
    2. 去npm网址找gulp插件，来完成这个工作
      gulp-xxx
    3. 下载插件
      npm i xxx -D / --save-dev
    4. 引入插件
      const xxx = require("gulp-xxx");
    5. 注册插件任务
    6. 使用任务
      gulp 任务名称
*/
const gulp = require("gulp");
// 引入插件
const babel = require("gulp-babel");

/*
  将JS代码中ES6模块化语法编译成浏览器能识别的语法
    babel
    browserify
*/
// 注册babel插件任务
// gulp.task(任务名称, 要执行的操作)
gulp.task("babel", () => {
  return gulp
    .src("src/js/*.js") // 将 src/js 所有JS文件导入到gulp的流中
    .pipe(  
      // 使用babel对流中的文件进行编译
      // 将ES6语法编译成ES5以下语法
      // 将ES6模块化编译成commonjs
      babel({ 
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("dist")); // 输出到dist目录下
});
