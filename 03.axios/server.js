const http = require("http");

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.setHeader("Content-Type", "application/json;charset=utf8");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const person = {
      name: "jack",
      age: 18,
    };
    res.end(JSON.stringify(person));
  }, 5000);
});

server.listen(9527, "localhost", (err) => {
  if (err) {
    console.log("服务器启动失败", err);
    return;
  }
  console.log("服务器启动成功~");
});
