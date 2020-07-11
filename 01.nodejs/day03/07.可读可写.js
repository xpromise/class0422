const fs = require("fs");

// 创建可读流: 当你创建可读流时，会自动读取一次数据（默认 64kb大小）
const rs = fs.createReadStream(
  "C:\\Users\\XiongJian\\Desktop\\0422\\2020-07-11 10-08-36.mp4"
);
const ws = fs.createWriteStream("1.mp4");

/* rs.once('close', () => {
  // 可读流读取完了，此时就可以关闭可写流
  ws.end();
});

rs.on('data', (chunk) => {
  ws.write(chunk);
})
 */

rs.pipe(ws);
