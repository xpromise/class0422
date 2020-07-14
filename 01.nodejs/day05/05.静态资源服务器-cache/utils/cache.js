const etag = require("etag");

/**
 * 检查当前资源是否要走协商缓存
 * @param {*} stats 文件内容对象
 * @param {*} req 请求对象
 * @returns {Boolean} 是否走缓存
 */
function checkCache(stats, req) {
  // 获取客户端的请求头两个字段
  const ifModifiedSince = req.headers["if-modified-since"];
  const ifNoneMatch = req.headers["if-none-match"];

  // 获取文件本身的etag和last-modified
  const eTag = etag(stats);
  const lastModified = new Date(stats.mtime).toGMTString();

  if (ifNoneMatch !== eTag) {
    return false;
  }

  if (ifModifiedSince !== lastModified) {
    return false;
  }

  return true;
}

/**
 * 设置新缓存
 * @param {*} stats 文件内容对象
 * @param {*} res 响应对象
 */
function setCache(stats, res) {
  // 先设置强制缓存
  res.setHeader("Cache-Control", "max-age=3600, public");
  res.setHeader("Expires", new Date(Date.now() + 60000).toGMTString());
  // 再设置协商缓存
  res.setHeader("Etag", etag(stats));
  res.setHeader("Last-Modified", new Date(stats.mtime).toGMTString());
}

function cache(stats, req, res) {
  const isCache = checkCache(stats, req);

  if (isCache) {
    // 要走缓存，响应到此终止，后面就不需要了
    // 设置响应状态码304
    res.statusCode = 304;
    res.end();
    return true;
  }

  // 不走缓存，设置新缓存
  // 还需要后面响应
  setCache(stats, res);
}

module.exports = cache;
