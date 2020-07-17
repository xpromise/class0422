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

    if (req.method === "GET") {
      console.log(req.url); // 请求的查询字符串参数 /?name=jack&age=18
      res.end("success4444~");
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
