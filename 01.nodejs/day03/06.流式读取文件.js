const fs = require('fs');

// 创建可读流: 当你创建可读流时，会自动读取一次数据（默认 64kb大小）
const rs = fs.createReadStream('C:\\Users\\XiongJian\\Desktop\\0422\\2020-07-11 10-08-36.mp4');

// 如果想读取第二次...，就要消费上一次数据
rs.on('data', (chunk) => {
  console.log(chunk.length);
})
