import React, { Component } from "react";

import A from "./A";
import B from "./B";

export default class App extends Component {
  state = {
    a: 1,
    b: 2,
  };

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
