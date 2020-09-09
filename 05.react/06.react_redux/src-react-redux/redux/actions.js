/*
  用来创建action对象的工厂函数模块
  action: {type: 类型, data: 数据}
*/
import { INCREMENT, DECREMENT } from "./constants";

// function increment(data) {
//   return {
//     type: "INCREMENT",
//     data,
//   };
// }

export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });

// function decrement(data) {
//   return {
//     type: "DECREMENT",
//     data,
//   };
// }
