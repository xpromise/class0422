/*
  修改webpack配置的文件
*/
module.exports = {
  devServer: {
    open: true, // 自动打开浏览器
    port: 9527,
    proxy: { // 配置代理服务器
      "/api": {
        target: "http://localhost:5000",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
