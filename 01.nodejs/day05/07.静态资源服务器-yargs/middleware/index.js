/*
  中间件函数: 处理请求的核心逻辑函数
*/
const path = require("path");
const fs = require("fs");
// utils中放置工具函数
const util = require("util");

const pug = require("pug");

const matchMimeTypes = require("../utils/mimeType");
const compress = require("../utils/compress");
const cache = require("../utils/cache");

const { dir } = require("../bin");

// 将fs.xxx方法装换成基于promise的函数
const readdir = util.promisify(fs.readdir);
// const readFile = util.promisify(fs.readFile);
const stat = util.promisify(fs.stat);

module.exports = async (req, res) => {
  try {
    // 获取请求路径
    // decodeURI(req.url)目的将经过url编码的中文转换中文
    const url = decodeURI(req.url); // / 或 /01.server.js

    // 文件绝对路径
    const filePath = path.resolve(dir, url.slice(1));
    // 如果文件/文件夹存在，返回相应的信息
    // 如果文件/文件夹不存在，返回失败的promise
    const stats = await stat(filePath);

    // 判断是否是文件夹
    if (stats.isDirectory()) {
      // 说明是文件夹
      const files = await readdir(filePath);
      // pug文件路径
      const pugFilePath = path.resolve(__dirname, "../views/index.pug");
      const prefixUrl = url === "/" ? url : url + "/";
      // 将pug文件内容渲染成html字符串
      const htmlStr = pug.renderFile(pugFilePath, { files, prefixUrl });
      // 操作成功，返回成功的响应
      // 设置响应头
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      // 返回响应
      res.end(htmlStr);
    } else {
      // 说明是文件
      // 检查缓存
      const isCache = cache(stats, req, res);
      // 命中缓存后面代码不执行了
      if (isCache) return;

      // const data = await readFile(filePath);
      let rs = fs.createReadStream(filePath);

      // 处理mimeType
      const mimeType = matchMimeTypes(url);
      // 设置响应头
      res.setHeader("Content-Type", `${mimeType};charset=utf-8`);

      if (stats.size > 1024) {
        // 处理压缩
        rs = compress(rs, req, res);
      }

      // 返回响应
      rs.pipe(res);
      // res.end(data);
    }
  } catch (e) {
    console.log(e);
    // 操作失败，返回失败的响应
    // 设置响应状态码（默认为200）
    res.statusCode = 404;
    // 设置响应头
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    // 返回响应
    res.end("文件或文件夹找不到");
  }
};
