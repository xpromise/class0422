import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import store from "./redux/store";

ReactDOM.render(
  // 内部通过context组件通信，给后代组件传递store对象
  // 后代组件通过指定语法就能接受store对象（可以省略手动引入store代码）
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
