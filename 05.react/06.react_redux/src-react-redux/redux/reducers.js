/*
  用来根据prevState和action来生成newState函数模块
*/
import { INCREMENT, DECREMENT } from "./constants";
// 初始化状态值
const initCount = 0;
// 管理状态数据是啥，函数名称就是啥
function count(prevState = initCount, action) {
  // 一上来redux为了初始化状态，调用了reducer函数
  // console.log(prevState, action);
  switch (action.type) {
    case INCREMENT:
      return prevState + action.data;
    case DECREMENT:
      return prevState - action.data;
    default:
      return prevState;
  }
}

export default count;
