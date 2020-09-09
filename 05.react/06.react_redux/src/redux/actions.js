/*
  用来创建action对象的工厂函数模块
  action: {type: 类型, data: 数据}
*/
import { INCREMENT, DECREMENT } from "./constants";

/*
  分为同步action和异步action
    同步action：返回值是一个action对象
    异步action：返回值是一个函数，执行函数时发送请求
*/
export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });

export const incrementAsync = (data) => {
  return (dispatch) => {
    // dispatch 就是 store.dispatch 用来触发更新的方法
    // 发送请求
    setTimeout(() => {
      // 请求成功
      // 更新redux数据
      const action = increment(data);
      dispatch(action);
    }, 1000)
  }
}

