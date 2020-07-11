/*
  http模块
    服务器：1. 接受请求 2. 处理请求 3. 返回响应

    如何访问服务器：http://localhost:9527
*/
const http = require('http');

// 创建服务
const server = http.createServer((request, response) => {
  /*
    request  请求对象：客户端发送过来的数据
    response 响应对象：服务端响应给客户端的数据
  */
  // 处理请求的回调函数
  // 响应头
  response.setHeader('Content-Type', 'text/plain;charset=utf-8');
  // 返回响应
  // response.end('hello server~');
  response.end('第一个服务器~');
})

// 监听端口号。启动服务
server.listen(9527, 'localhost', (err) => {
  if (err) {
    console.log('服务器启动失败了', err);
    return;
  }
  console.log('服务器启动成功了~');
})