const http =require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('服务器接收到请求了~');
  if (req.url === '/ajax.html') {
    const rs = fs.createReadStream('./01.ajax.html');
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    rs.pipe(res);
    return;
  }

  res.end('success~');
}).listen(9527)