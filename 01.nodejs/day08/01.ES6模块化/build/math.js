"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;
exports.mul = mul;
exports.name = void 0;

function count(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

var name = 'rose'; // 统一暴露：后面跟一个对象，对象里面放置暴露的内容

exports.name = name;