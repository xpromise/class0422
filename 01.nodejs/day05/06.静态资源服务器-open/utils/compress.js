const zlib = require('zlib');
/**
 * 压缩文件的方法
 * @param {*} rs 可读流
 * @param {*} req 请求对象
 * @param {*} res 响应对象
 * @returns {*} rs 经过压缩后的可读流
 */
function compress(rs, req, res) {
  // 1. 获取客户端兼容的压缩格式
  const acceptEncoding = req.headers['accept-encoding']; // 'gzip, deflate, br'

  // 判断是否支持gzip
  const isGzip = acceptEncoding.match(/gzip/);
  if (isGzip) {
    // 对数据进行gzip压缩
    rs = rs.pipe(zlib.createGzip());
    // 设置响应头
    res.setHeader('Content-Encoding', 'gzip');
    return rs;
  }
  // 判断是否支持deflate
  const isDeflate= acceptEncoding.match(/deflate/);
  if (isDeflate) {
    // 对数据进行deflate压缩
    rs = rs.pipe(zlib.createDeflate());
    // 设置响应头
    res.setHeader('Content-Encoding', 'deflate');
    return rs;
  }
  // 判断是否支持br
  const isBr= acceptEncoding.match(/br/);
  if (isBr) {
    // 对数据进行br压缩
    rs = rs.pipe(zlib.createBrotliCompress());
    // 设置响应头
    res.setHeader('Content-Encoding', 'br');
    return rs;
  }

  // 默认返回
  return rs;
}

module.exports = compress;