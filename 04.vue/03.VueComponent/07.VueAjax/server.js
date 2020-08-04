const http = require("http");

http
  .createServer((req, res) => {
    // 设置cors，解决跨域
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("content-type", "application/json;charset=utf-8");

    const repo = {
      name: "vue",
      url: "https://github.com/vue",
    };

    res.end(
      JSON.stringify({
        code: 10000, // 功能成功
        data: repo, // 成功的数据
      })
    );
  })
  .listen(3000);
