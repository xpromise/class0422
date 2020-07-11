const http = require('http');

// 创建客户端
const request = http.request('http://localhost:9527', (response) => {
  // console.log(response);

  // response相当于可读流
  response.on('data', (chunk) => {
    console.log(chunk.toString());
  })

})

// 发送请求
request.end();