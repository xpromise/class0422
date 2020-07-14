const http = require("http");
const fs = require("fs");
const util = require("util");
const path = require("path");
const etag = require("etag");

/*
  缓存策略：
    1. 强制缓存（优先级更高）
      HTTP 1.1 Cache-Control（优先级更高）
        max-age=3600
      HTTP 1.0 Expires 
        new Date(Date.now() + 3600000).toGMTString()
      特点：
        在缓存的有效期内，会直接加载浏览器缓存，不会访问服务器
        状态码 200  
          memory cache 
          disk cache

    2. 协商缓存（优先级更低）
      服务端发送客户端（位于响应报文）
        etag  代表文件内容唯一标识 npm i etag etag(stats)
        last-modified 代表文件最近一次修改时间 new Date(stats.mtime).toGMTString()
      客户端发送服务端（位于请求报文）
        if-none-match 上次服务端发送过来的etag
        if-modified-since 上次服务端发送过来的last-modified
      特点：一定会向服务器发送请求，由服务器判断当前资源是否要走缓存
        状态码 304
*/

function checkCache(stats, req) {
  const ifNoneMatch = req.headers["if-none-match"];
  const ifModifiedSince = req.headers["if-modified-since"];

  const eTag = etag(stats);
  if (ifNoneMatch && ifNoneMatch === eTag) {
    return true;
  }

  const lastModified = new Date(stats.mtime).toGMTString();
  if (ifModifiedSince && ifModifiedSince === lastModified) {
    return true;
  }

  return false;
}

const stat = util.promisify(fs.stat);

const server = http.createServer(async (req, res) => {
  const url = decodeURI(req.url);

  if (url === "/favicon.ico") return res.end();

  const filePath = path.resolve(__dirname, url.slice(1));
  const stats = await stat(filePath);
  const isCache = checkCache(stats, req);

  if (isCache) {
    res.statusCode = 304;
    res.end();
    return;
  }

  const rs = fs.createReadStream(filePath);

  // 设置强制缓存
  res.setHeader("Cache-Control", "max-age=3600, public");
  res.setHeader("Expires", new Date(Date.now() + 3600).toGMTString());
  // 设置协商缓存
  res.setHeader("Etag", etag(stats));
  res.setHeader("Last-modified", new Date(stats.mtime).toGMTString());

  rs.pipe(res);
});

server.listen(3000, "localhost", (err) => {
  if (err) {
    console.log("服务器启动失败", err);
    return;
  }
  console.log("服务器启动成功  http://localhost:3000");
});
