// 引入http模块
const http = require("http");
// 会自动查找目录下index.js文件，所以index.js可以省略
const middleware = require("./middleware");
const open = require("./utils/open");
const { host, port } = require('./bin');

// 创建服务
const server = http.createServer(middleware);
// 监听端口号 启动服务
server.listen(port, host, (err) => {
  if (err) {
    console.log("服务器启动失败了", err);
    return;
  }
  const url = `http://${host}:${port}`;
  // 自动打开浏览器
  open(url);
  console.log(`
    服务器启动成功了 
    服务器访问地址：${url}
  `);
});
