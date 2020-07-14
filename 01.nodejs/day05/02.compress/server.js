const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
// const util = require("util");

// const readFile = util.promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
  const filePath = path.resolve(__dirname, "test.js");
  // const data = await readFile(filePath);
  let rs = fs.createReadStream(filePath);
  
  // 对可读流中的数据进行gzip压缩
  // rs = rs.pipe(zlib.createGzip());
  // res.setHeader('Content-Encoding', 'gzip');

  // deflate压缩
  // rs = rs.pipe(zlib.createDeflate());
  // res.setHeader('Content-Encoding', 'deflate');

  // br压缩
  rs = rs.pipe(zlib.createBrotliCompress());
  res.setHeader('Content-Encoding', 'br');

  res.setHeader("Content-Type", "application/javascript;charset=utf8");
  rs.pipe(res);
  // res.end(data);
});

server.listen(3000, "localhost", (err) => {
  if (err) {
    console.log("服务器启动失败", err);
    return;
  }
  console.log("服务器启动成功  http://localhost:3000");
});
