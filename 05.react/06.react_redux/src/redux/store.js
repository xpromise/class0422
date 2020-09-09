/*
  用来集中式管理状态数据的容器
  里面包含了读取/更新数据的方法
    store.getState()
    store.dispatch(action)
    store.subscribe(listener);
*/
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

/*
  process.env.NODE_ENV 临时环境变量
  当webpack打包开发环境 development
  当webpack打包生产环境 production
  作用：区分打包环境
*/

// 创建store对象
const store = createStore(
  reducers,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
);

// 暴露出去
export default store;
