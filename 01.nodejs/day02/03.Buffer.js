

// 创建Buffer容器
const buf1 = Buffer.alloc(10);
console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.allocUnsafe(10);
console.log(buf2); // <Buffer 20 00 7b 00 0d 00 0a 00 20 00>

// buf1[0] = 123;

console.log(buf1);

/*
  英文1字节
  中文3字节
*/
const buf3 = Buffer.from('hello atguigu');
console.log(buf3);
const buf4 = Buffer.from('尚硅谷');
console.log(buf4);

console.log(buf4.toString()); // 尚硅谷
/*
  16进制 0 - 9 a b c d e f
  8 进制 0 - 7
  2 进制 0 - 1
 
  00 - ff
  0 - 255
  0000000 - 11111111

  1 byte = 8 bit 
  1 kb = 1024 byte
  1 mb = 1024 kb
  1 gb = 1024 mb
  1 tb = 1024 gb
*/