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

// 将fs.readdir方法装换成基于promise的函数
const readdir = util.promisify(fs.readdir);

// 创建服务
const server = http.createServer(async (req, res) => {
  try {
    // 文件路径
    const filePath = path.resolve(__dirname);
    // 读取文件夹
    const files = await readdir(filePath);

    // console.log(files); // [ '01.server.js', '02.server.js', '03.server.js' ]
    /* let lis = "";
    files.forEach((file) => {
      lis += `<li>${file}</li>`;
    }); */
    const lis = files.reduce((p, c) => {
      p += `<li>${c}</li>`;
      return p;
    }, '');

    // 操作成功，返回成功的响应
    // 设置响应头
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    // 返回响应
    res.end(`
      <ul>
        ${lis}
      </ul>
    `);
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
