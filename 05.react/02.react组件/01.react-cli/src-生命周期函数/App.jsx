import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor() {
    super();
    console.log("constructor");
    /*
      过去：
        1. 初始化state
        2. 初始化createRef
        3. 改变函数的this指向
      现在：基本不用~
    */
    this.state = {};
  }

  // 根据props来计算生成新state（如果state和props相关）
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    // 返回新状态
    return {};
  }

  getSnapshotBeforeUpdate() {
    // 在真正渲染之前，提前操作DOM
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  handleClick = () => {
    this.setState({});
    // this.forceUpdate(() => {});
  };

  goDie = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  render() {
    // 返回要渲染的虚拟DOM对象
    console.log("render");
    return (
      <div>
        生命周期 <button onClick={this.handleClick}>更新</button>
        <button onClick={this.goDie}>go die</button>
      </div>
    );
  }
}
