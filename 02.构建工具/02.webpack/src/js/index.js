import add from "./add";
import person from '../json/person';
// 引入样式
// 目的：让webpack能够打包less文件
import '../less/test1.less';
import '../less/test2.less';

console.log(add(3, 3));
console.log(person);