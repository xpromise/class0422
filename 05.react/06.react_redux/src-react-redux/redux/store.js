/*
  用来集中式管理状态数据的容器
  里面包含了读取/更新数据的方法
    store.getState()
    store.dispatch(action)
    store.subscribe(listener);
*/
import { createStore } from "redux";

import reducers from "./reducers";

// 创建store对象
const store = createStore(reducers);

// 暴露出去
export default store;
