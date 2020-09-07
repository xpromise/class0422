import React, { PureComponent } from "react";

import A from "./A";
import B from "./B";

export default class App extends PureComponent {
  state = {
    a: 1,
    b: 2,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   /*
  //     判断props中b数据前后是否一致
  //       如果一致，就不更新 (所有props都相等就不更新 false)
  //       如果不一样，才需要更新 （只要有一个不相等，就要更新 true）
  //   */
  //   // console.log(this.props); // 上一次的props 还未更新的props
  //   // console.log(nextProps); // 最新的props

  //   const stateKeys = Object.keys(nextState);

  //   for (let j = 0; j < stateKeys.length; j++) {
  //     const key = stateKeys[j];
  //     if (this.state[key] !== stateKeys[key]) {
  //       return true; // 更新
  //     }
  //   }

  //   return false; // 不更新
  // }

  handleAClick = () => {
    this.setState({
      a: this.state.a + 1,
    });
  };
  
  handleBClick = () => {
    this.setState({
      b: this.state.b + 1,
    });
  };

  render() {
    console.log("App组件 render");

    const { a, b } = this.state;

    return (
      <div>
        <h1>App...</h1>
        <button onClick={this.handleAClick}>更新a数据</button>
        <button onClick={this.handleBClick}>更新b数据</button>
        <A a={a} />
        <B b={b} />
      </div>
    );
  }
}
