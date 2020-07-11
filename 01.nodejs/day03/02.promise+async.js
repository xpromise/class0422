const fs = require("fs");

async function writeFile() {
  try {
    // 放置可能出错的异步代码
    // 一旦异步代码出错，就会中断try中代码执行，立即来到catch

    // 1. 打开文件
    // await 只有promise对象成功才有返回值
    // 返回值看resolve方法传入的参数
    const fd = await new Promise((resolve, reject) => {
      // 执行异步代码
      fs.open("b.txt", "w", (error, fd) => {
        if (error) {
          console.log("打开文件出错了", error);
          reject(error);
          return;
        }

        console.log("打开文件成功了");
        resolve(fd);
      });
    });

    // 2. 写入文件
    await new Promise((resolve, reject) => {
      // 执行异步代码
      fs.write(fd, "爬山~", (error) => {
        if (error) {
          console.log("写入文件出错了", error);
          // resolve(error);
        }

        console.log("写入文件成功了");
        // 不管成功/失败都会调用resolve，为了让执行后面关闭文件的方法
        resolve(error);
      });
    });

    // 3. 关闭文件
    await new Promise((resolve, reject) => {
      // 执行异步代码
      fs.close(fd, (error) => {
        if (error) {
          console.log("关闭文件出错了", error);
          reject(error);
          return;
        }
        console.log("关闭文件成功了");
        resolve();
      });
    });
    
  } catch (error) {
    // 放置处理错误的代码
    console.log(error);
  }
}

writeFile();
