// 引入http模块
const http = require("http");
const fs = require("fs");
const path = require("path");
// utils中放置工具函数
const util = require("util");
/*
  需求：
    http://localhost:9527/ --> 返回day04文件夹下面所有文件
    http://localhost:9527/01.server.js --> 返回01.server.js文件
*/

// 将fs.readdir方法装换成基于promise的函数
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const stat = util.promisify(fs.stat);

// 创建服务
const server = http.createServer(async (req, res) => {
  try {
    // 获取请求路径
    const url = req.url; // / 或 /01.server.js
    // 文件绝对路径
    const filePath = path.resolve(__dirname, url.slice(1));
    // 如果文件/文件夹存在，返回相应的信息
    // 如果文件/文件夹不存在，返回失败的promise
    const stats = await stat(filePath);

    // 判断是否是文件夹
    if (stats.isDirectory()) {
      // 说明是文件夹
      const files = await readdir(filePath);
      // 拼接成字符串
      const lis = files.reduce((p, c) => {
        // c 就是文件名   01.server.js
        // 访问文件路径： http://localhost:9527/01.server.js 
        // 简写：/01.server.js 
        p += `<li><a href="/${c}">${c}</a></li>`;
        return p;
      }, "");

      // 操作成功，返回成功的响应
      // 设置响应头
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      // 返回响应
      res.end(`
        <ul>
          ${lis}
        </ul>
      `);
    } else {
      // 说明是文件
      const data = await readFile(filePath);
      // 设置响应头
      res.setHeader("Content-Type", "application/javascript;charset=utf-8");
      // 返回响应
      res.end(data);
    }
  } catch (e) {
    // 操作失败，返回失败的响应
    // 设置响应状态码（默认为200）
    res.statusCode = 404;
    // 设置响应头
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    // 返回响应
    res.end("文件或文件夹找不到");
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
