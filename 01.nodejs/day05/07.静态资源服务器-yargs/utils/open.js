const { exec } = require('child_process');

function open(url) {
  let cmd = "";
  switch (process.platform) {
    case "win32": // windows
      cmd = "start";
      break;
    case "darwin": // mac
      cmd = "open";
      break;
    case "linux": // linux
      cmd = "xdg-open";
      break;
  }
  // 在终端中运行打开浏览器的代码
  exec(`${cmd} ${url}`);
}

module.exports = open;
