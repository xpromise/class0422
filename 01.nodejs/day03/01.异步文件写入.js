/*
  异步文件写入：
    1. 打开文件
      fs.open(path[, flags[, mode]], callback)
    2. 写入文件
      fs.write(fd, string[, position[, encoding]], callback)
    3. 关闭文件
      fs.close(fd, callback)

*/
// 引入fs模块
const fs = require('fs');

// 1. 打开文件
fs.open('a.txt', 'w', (error, fd) => {
  if (error) {
    console.log('打开文件出错了', error);
    return;
  }

  console.log('打开文件成功了');

  // 2. 写入文件
  fs.write(fd, '唱跳rap篮球', (error) => {
    if (error) {
      console.log('写入文件出错了', error);
    } else {
      console.log('写入文件成功了');
    }

    // 3. 关闭文件
    fs.close(fd, (error) => {
      if (error) {
        console.log('关闭文件出错了', error);
        return;
      }
      console.log('关闭文件成功了');
    })

  })

})

