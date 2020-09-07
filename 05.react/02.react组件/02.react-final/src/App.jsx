import React, { Component, Fragment } from "react";

import Child from "./Child";

/*
  错误边界组件: 错误边界，用来捕获后代组件错误，渲染出备用页面
  特点：只能捕获后代组件生命周期产生的错误，
  不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
*/
export default class App extends Component {
  state = {
    hasError: false, // 子组件是否报错
  };

  // 生命周期函数，一旦后台组件报错，就会触发
  static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;

    return (
      <Fragment>
        <h1>App...</h1>
        <p>content...</p>
        {hasError ? <p>子组件出错了</p> : <Child />}
      </Fragment>
    );
  }
}
