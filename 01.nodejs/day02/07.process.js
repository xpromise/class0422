/*
  process 获取nodejs运行时进制的信息
    process.env 设置/获取环境变量
    process.cwd() 获取当前运行程序目录
    process.exit([code]) 退出进制
*/

// console.log(process.env.NODE_ENV);
// process.env.NODE_ENV = 'development'

console.log(process.cwd());

let i = 0;
while (true) {
  i++;
  console.log(i);
  if (i > 100) {
    process.exit();
  }
}