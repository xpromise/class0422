// 引入http模块
const http = require("http");
const fs = require("fs");
const path = require("path");
// utils中放置工具函数
const util = require("util");
/*
  问题1：每次修改服务器代码，都需要重启服务器才能生效，很麻烦
  解决：
    npm i nodemon -g
    过去 node xxx
    现在 nodemon xxx
      nodemon会监视xxx文件，一旦xxx文件发生变化，会自动重启服务器

  问题2：将异步代码改造成 promise+async 的方式
    为了复用定义函数

    util.promisify 将普通异步函数转换成基于promise对象的函数
*/

/**
 * 读取文件方法
 * @param {String} filePath 文件路径
 */
/* function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
        // 失败响应
        return;
      }
      // 成功
      resolve(data);
    });
  })
} */

// 将fs.readFile方法装换成基于promise的函数
const readFile = util.promisify(fs.readFile);

// 创建服务
const server = http.createServer(async (req, res) => {
  try {
    // 文件路径
    const filePath = path.resolve(__dirname, "01.server.js");
    // 读取文件
    const data = await readFile(filePath);
    // 操作成功，返回成功的响应
    // 设置响应头
    res.setHeader("Content-Type", "application/javascript;charset=utf-8");
    // 返回响应
    res.end(data);
  } catch (e) {
    // 操作失败，返回失败的响应
    // 设置响应状态码（默认为200）
    res.statusCode = 404;
    // 设置响应头
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    // 返回响应
    res.end("文件找不到 404");
  }

  /* fs.readFile(filePath, (err, data) => {
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
  }); */
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
