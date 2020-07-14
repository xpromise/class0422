const yargs = require("yargs");

// 收集运行当前文件的指令
const argv = yargs
  .command("[options]:")
  // 添加指令选项
  .option("port", {
    alias: "p", // 配置指令别名
    describe: "指定端口号",
    default: 9527,
  })
  .option("host", {
    alias: "H", // 配置指令别名
    describe: "指定主机名",
    default: "localhost",
  })
  .version()
  .alias("version", "v")
  .help()
  .alias("help", "h").argv;

console.log(argv);
