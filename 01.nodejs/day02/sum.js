
/* function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
} */

const sum = (...args) => args.reduce((p, c) => p + c, 0);

// 暴露出去
// 暴露一个
// 直接暴露sum函数
module.exports = sum;

// 暴露多个
// module.exports = {
//   sum,
//   count
// };