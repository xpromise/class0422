const http = require("http");
/*
  会话控制：解决http协议无状态问题（http协议是没办法区别用户）
    1. cookie
      - 创建
        res.setHeader("Set-Cookie", "user=jack;max-age=3600;httpOnly=true");
      - 获取
        req.headers.cookie
      - 删除
        res.setHeader("Set-Cookie", "user=;max-age=0")

      客户端获取 document.cookie
      客户端设置 document.cookie = 'name=rose;max-age=3600'
      
      特点：
        本质上是存储在客户端key-value文本
        大小 4kb左右和数量 20个左右有限制
        传输流量大
        安全性较低

    2. session

*/

const server = http.createServer((req, res) => {
  // 创建cookie，作为响应头响应回去
  // 会话cookie，一旦关闭浏览器会自动销毁
  // res.setHeader('Set-Cookie', 'user=jack');
  // 持久化cookie
  // res.setHeader("Set-Cookie", "user=jack;max-age=3600;httpOnly=true");

  // 获取cookie
  // console.log(req.headers.cookie); // user=jack; name=rose
  // 将cookie解析成对象
  // ['user=jack', 'name=rose'] --> {user: 'jack', name: 'rose'}
  // const cookies = req.headers.cookie.split("; ").reduce((p, c) => {
  //   const [key, value] = c.split("=");
  //   p[key] = value;
  //   return p;
  // }, {});
  // console.log(cookies);

  // 删除cookie
  res.setHeader("Set-Cookie", "user=;max-age=0");

  res.end("success");
});

server.listen(9527, "localhost", (err) => {
  if (err) {
    console.log("服务器启动失败", err);
    return;
  }
  console.log("服务器启动成功  http://localhost:9527");
});
