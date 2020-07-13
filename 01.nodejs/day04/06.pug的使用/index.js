// nodejs核心模块
const path = require("path");
// 第三方模块（通过npm下载）
const pug = require("pug");
// 自己定义的模块

const filePath = path.resolve(__dirname, "./views/index.pug");

// renderFile 将pug文件内容编译成html字符串返回
const htmlStr = pug.renderFile(filePath, {
  isVisible: true,
  persons: [
    { name: "jack", age: 20 },
    { name: "rose", age: 18 },
  ],
});

console.log(htmlStr);

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>pug的初体验</title>
  </head>
  <body>
    <div class="container" id="box">
      <span>这是一段文字</span>
    </div>
    <p>显示</p>
    <ul>
      <li>jack - 20 - 0</li>
      <li>rose - 18 - 1</li>
    </ul>
  </body>
</html>
*/
