const http = require("http");

const users = require("./users");

http
  .createServer((req, res) => {
    // 设置cors，解决跨域
    // console.log(req.url);
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("content-type", "application/json;charset=utf-8");

    res.end(JSON.stringify(users));
  })
  .listen(3000);
