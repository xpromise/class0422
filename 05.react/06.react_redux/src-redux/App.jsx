import React, { Component, Fragment } from "react";

import store from "./redux/store";
import { increment, decrement } from "./redux/actions";

export default class App extends Component {
  state = {
    num: 1,
  };

  handleChange = (e) => {
    this.setState({
      num: +e.target.value,
    });
  };

  increment = () => {
    // 更新redux数据
    // 1. 调用actions生成action对象
    const action = increment(this.state.num);
    // 2. 调用store.dispatch(action)触发更新
    store.dispatch(action);
  };

  decrement = () => {
    store.dispatch(decrement(this.state.num));
  };

  incrementIfOdd = () => {
    const count = store.getState();
    if ((count & 1) === 0) return;
    // if (count % 2 === 0) return;
    store.dispatch(increment(this.state.num));
  };

  incrementIfAsync = () => {
    setTimeout(() => {
      store.dispatch(increment(this.state.num));
    }, 1000);
  };

  componentDidMount() {
    // 事件：当store对象中的数据发生变化，就会触发
    // 重新渲染组件
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    // 读取state
    const count = store.getState();

    return (
      <Fragment>
        <h1>click {count} times</h1>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementIfAsync}>incrementAsync</button>
      </Fragment>
    );
  }
}
