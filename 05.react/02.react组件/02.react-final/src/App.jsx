import React, { Component } from "react";

import A from "./A";
import B from "./B";

export default class App extends Component {
  state = {
    count: 1,
  };

  update = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.update}>update</button>

        {/* 适用于：只渲染组件（A组件渲染B组件） */}
        {/* <A>
          <B />
        </A> */}

        {/* 适用于：即渲染组件，同时传递动态数据（A组件渲染B组件） */}
        <A render={(props) => <B {...props} />} />
      </div>
    );
  }
}
