function count(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

// 统一暴露：后面跟一个对象，对象里面放置暴露的内容
export {
  count,
  mul
}
