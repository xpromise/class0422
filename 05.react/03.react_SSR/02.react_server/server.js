import http from "http";

import React from 'react';
// 用于服务端渲染的库
import ReactDOMServer from "react-dom/server";

import App from "./src/App";

const server = http.createServer((req, res) => {
  // 将App组件渲染成html标签字符串
  const htmlStr = ReactDOMServer.renderToString(<App />);

  console.log(htmlStr);

  res.setHeader("content-type", "text/html;charset=utf-8");
  // 响应回去
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React Server Render</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div>${htmlStr}</div>
      </body>
    </html>
  `);
});

server.listen(9527, "localhost", (err) => {
  if (err) {
    console.log("服务器启动失败了~", err);
    return;
  }

  console.log("服务器启动成功了, 请访问: http://localhost:9527");
});
