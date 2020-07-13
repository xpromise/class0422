// 引入http模块
const http = require("http");
const fs = require("fs");
const path = require("path");
// utils中放置工具函数
const util = require("util");
/*
  需求：
    如果是文件，返回具体文件内容
    如果是文件夹，返回文件夹下面的所有文件列表
*/

/**
 * 读取文件方法
 * @param {String} filePath 文件路径
 */
/* function readFile(filePath) {
  return new Promise((resolve, reject) => {
    // 执行异步操作
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
