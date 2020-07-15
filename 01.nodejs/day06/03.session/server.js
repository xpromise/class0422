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

      本质上是存储在服务器对象
      大小和数量理论上没有限制
      传输流量小（只有一个cookie）
      安全性较高

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

/*
  如果访问 /login 代表要存储用户信息
  如果访问 /user 代表要获取用户信息
*/

const server = http.createServer((req, res) => {
  // console.log(req.url); // /?name=jack&age=18
  // name=jack&age=18
  const url = req.url;
  if (url === "/favicon.ico") return;

  if (url.startsWith("/login")) {
    // 获取查询字符串参数并解析成对象
    const qs = url.split("?")[1];
    // ['name=jack', 'age=18']
    const arr = qs.split("&");
    const query = arr.reduce((p, item) => {
      const [key, value] = item.split("=");
      p[key] = value;
      return p;
    }, {});

    // console.log(query); // { name: 'jack', age: '18' }
    // 创建session_id
    const sessionId = uniqueId();
    // 将用户数据存到session对象中
    session[sessionId] = query;
    // 返回一个携带session_id的cookie给用户
    res.setHeader(
      "Set-Cookie",
      `sessionId=${sessionId};max-age=3600;httpOnly=true`
    );

    res.end("success");

    return;
  }

  if (url === "/user") {
    // 获取请求头cookie并解析成对象
    const cookies = req.headers.cookie.split("; ").reduce((p, c) => {
      const [key, value] = c.split("=");
      p[key] = value;
      return p;
    }, {});
    // 找到sessionId
    const { sessionId } = cookies;
    // 找到用户数据
    const user = session[sessionId];

    if (user) {
      // 说明用户上次访问过/login
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(user));
      return;
    }

    res.setHeader("Content-Type", "text/plain;charset=utf8");
    res.end("暂无数据~");
  }
});

server.listen(9527, "localhost", (err) => {
  if (err) {
    console.log("服务器启动失败", err);
    return;
  }
  console.log("服务器启动成功  http://localhost:9527");
});
