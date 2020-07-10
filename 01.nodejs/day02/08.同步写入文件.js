/*
  fs - file system 文件系统

  同步写入文件：
    1. 打开文件 
      fs.openSync(path[, flags, mode])
        path 文件路径
        flags 要对文件执行的操作 
          r read 读（默认值）
          w write 写
          a add 追加/添加
        mode 设置文件操作权限
          0o111 文件可执行
          0o222 文件可写入
          0o444 文件可读取
          0o666 文件可读可写（默认值）
    2. 写入文件（写入内容）
      fs.writeSync(fd, string[, position[, encoding]])
        fd 要写入文件的描述符
        string 要写入的内容
        position 写入文件的位置 0
        encoding 编码方式 utf-8
    3. 关闭文件
      fs.closeSync(fd)
*/

// 引入fs
const fs = require('fs');

// 1. 打开文件
// const fd = fs.openSync('c.txt', 'w', 0o666);
const fd = fs.openSync('c.txt', 'w');

// 2. 写入文件（写入内容）
// const result = fs.writeSync(fd, '大碗宽面', 0, 'utf-8');
const result = fs.writeSync(fd, '大碗宽面');
console.log(result);

// 3. 关闭文件
fs.closeSync(fd);