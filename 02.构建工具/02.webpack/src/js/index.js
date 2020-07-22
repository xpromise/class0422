// import '@babel/polyfill';
import add from './add';
// import person from '../json/person.json';
// 引入样式
// 目的：让webpack能够打包less文件
import '../less/test1.less';
import '../less/test2.less';
// 引入图片
// import '../imgs/1.jpg'

add(4, 3);
// person;

// alert('hello eslint');

/*
  1. babel-loader
    presets: ["@babel/preset-env"],
    功能：能处理ES6以上简单语法
    问题：不能处理较复杂语法：promise...
  2. @babel/polyfill
    将ES6以上的高级语法全部自定义好
    只要引入就能使用
    问题: 体积太大了
  3. core-js
    npm i core-js
    按需加载需要使用的兼容性包，
    体积更小
*/
const promise = new Promise((resolve) => {
  resolve();
});

promise.then(() => 'hello promise');
