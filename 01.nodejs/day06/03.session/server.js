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
        大小 30kb左右和数量 20个左右有限制
        传输流量大
        安全性较低

    2. session

*/
// 创建session对象
const session = {};

/**
 * 生成随机id的方法
 */
function uniqueId() {
  // substring去掉.
  const randomNum = Number(Math.random().toString().substring(2));
  // .toString(32) 转换为32进制
  return (randomNum + Date.now()).toString(32);
}

const server = http.createServer((req, res) => {

  
  res.end("success");
});

server.listen(9527, "localhost", (err) => {
  if (err) {
    console.log("服务器启动失败", err);
    return;
  }
  console.log("服务器启动成功  http://localhost:9527");
});
