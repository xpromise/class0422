
const fs = require('fs');

// 创建可写流
const ws = fs.createWriteStream('d.txt');

ws.once('open', () => {
  console.log('可写流打开成功~');
})

ws.once('close', () => {
  console.log('可写流关闭成功~');
})

// 写入内容
ws.write('淡黄的长裙');
ws.write('蓬松的头发');

// ws.close();
// 关闭可写流
ws.end();