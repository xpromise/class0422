"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAge = setAge;
exports.sex = exports.age = exports.name = void 0;
// 分别暴露：后面必须跟完整定义
var name = 'jack';
exports.name = name;
var age = 18;
exports.age = age;
var sex = '男';
exports.sex = sex;

function setAge() {}

;