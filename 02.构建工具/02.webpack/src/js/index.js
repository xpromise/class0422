import add from "./add";
import person from "../json/person";
// 引入样式
// 目的：让webpack能够打包less文件
import "../less/test1.less";
import "../less/test2.less";
// 引入图片
// import '../imgs/1.jpg'

console.log(add(4, 3)());
console.log(person);

