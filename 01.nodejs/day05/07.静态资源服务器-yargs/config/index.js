/*
  配置文件
*/
// const isProd = process.env.NODE_ENV === 'production';
const isProd = false;

// 开发环境
let port = 9527;
let host = "localhost";
const root = process.cwd();

if (isProd) {
  // 生产/上线环境
  port = 80;
  host = "127.0.0.1";
}

module.exports = {
  port,
  host,
  root
};
