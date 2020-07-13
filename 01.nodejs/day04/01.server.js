// 引入http模块
const http = require("http");
const fs = require("fs");
const path = require("path");
/*
  问题1：每次修改服务器代码，都需要重启服务器才能生效，很麻烦
  解决：
    npm i nodemon -g
    过去 node xxx
    现在 nodemon xxx
      nodemon会监视xxx文件，一旦xxx文件发生变化，会自动重启服务器
*/

// 创建服务
const server = http.createServer(async (req, res) => {
  // 文件路径
  const filePath = path.resolve(__dirname, "01.server.js");
  // 读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("文件读取失败", err);
      // 失败响应
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain;charset=utf-8");
      res.end("文件找不到 404");
      return;
    }
    // 成功响应
    // 设置响应头
    res.setHeader("Content-Type", "application/javascript;charset=utf-8");
    // 返回响应
    res.end(data);
  });
});

// 监听端口号 启动服务
const port = 9527;
const host = "localhost";

server.listen(port, host, (err) => {
  if (err) {
    console.log("服务器启动失败了", err);
    return;
  }
  console.log(`
    服务器启动成功了 
    服务器访问地址：http://${host}:${port}
  `);
});
