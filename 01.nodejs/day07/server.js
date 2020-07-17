const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log("服务器接收到请求了~");
    if (req.url === "/ajax.html") {
      const rs = fs.createReadStream("./04.ajax.html");
      res.setHeader("Content-Type", "text/html;charset=utf8");
      rs.pipe(res);
      return;
    }

    if (req.url === "/cors") {
      // CORS方案
      const safeUrl = [
        "http://127.0.0.1:5500",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:4000",
      ];
      // 请求来源地址
      const origin = req.headers.origin;

      const currentUrl = safeUrl.find((url) => url === origin);

      /*
        OPTIONS：预检请求
          作用：检查当前请求是否可以跨域
      */
      if (currentUrl) {
        // 允许哪些地址可以跨域
        res.setHeader("Access-Control-Allow-Origin", currentUrl);
        // 允许哪些请求头可以跨域
        res.setHeader("Access-Control-Allow-Headers", "bbb, auth");
        // 允许哪些请求方式可以跨域
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        // 预检请求缓存时间
        res.setHeader("Access-Control-Max-Age", 3600 * 24);
      }
      // 允许所有地址跨域
      // res.setHeader("Access-Control-Allow-Origin", "*");
      // 允许一个地址跨域
      // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

      res.setHeader("content-type", "application/json");

      const person = {
        name: "jack",
        age: 18,
      };
      res.end(JSON.stringify(person));
      return;
    }

    if (req.method === "GET") {
      // JSONP方案
      // console.log(req.url); // 请求的查询字符串参数 /?name=jack&age=18
      // res.end("success4444~");
      const { callback } = req.url
        .split("?")[1]
        .split("&")
        .reduce((p, c) => {
          const [key, val] = c.split("=");
          p[key] = val;
          return p;
        }, {});

      const person = {
        name: "jack",
        age: 18,
      };
      res.setHeader("content-type", "application/javascript");
      // getData(JSON.stringify(person))
      res.end(`${callback}(${JSON.stringify(person)})`);
    }

    if (req.method === "POST") {
      // 接收报文体数据
      req.on("data", (chunk) => {
        // console.log(chunk.toString()); // name=jack&age=18
        console.log(chunk.toString()); // {"name":"jack","age":20}
      });

      res.end("success4444~");
    }
  })
  .listen(9527);
