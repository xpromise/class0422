const fs = require("fs");
const path = require("path");

// 创建http server
const server = require("http").createServer((req, res) => {
  if (req.url === "/socket.io.js") {
    const filePath = path.resolve(__dirname, "./public/socket.io.js");
    const rs = fs.createReadStream(filePath);
    res.setHeader("Content-Type", "application/javascript;charset=utf8");
    rs.pipe(res);
    return;
  }
  // 响应页面
  const filePath = path.resolve(__dirname, "./public/chat.html");
  const rs = fs.createReadStream(filePath);
  res.setHeader("Content-Type", "text/html;charset=utf8");
  rs.pipe(res);
});
// 创建WebSocket服务
const io = require("socket.io")(server);

// io可以代表所有客户端连接对象
io.on("connect", (socket) => {
  // socket代表当前连接上服务的客户端对象
  socket.on("client_to_server", function (data) {
    console.log(data);
    // 除它以外，通知其他客户端
    socket.broadcast.emit("server_to_client", data);
  });
});

// 启动服务
server.listen(3000, 'localhost');
