const yargs = require("yargs");
const { port, host, root } = require("../config");

// 收集运行当前文件的指令
const argv = yargs
  .command("[options]:")
  // 添加指令选项
  .option("port", {
    alias: "p", // 配置指令别名
    describe: "指定端口号",
    default: port,
  })
  .option("host", {
    alias: "H", // 配置指令别名
    describe: "指定主机名",
    default: host,
  })
  .option("dir", {
    alias: "d", // 配置指令别名
    describe: "指定运行目录",
    default: root, // 当前运行指令的目录
  })
  .version()
  .alias("version", "v")
  .help()
  .alias("help", "h").argv;

module.exports = argv;
