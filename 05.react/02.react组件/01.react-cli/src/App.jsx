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
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    /*
      发送ajax请求
      设置定时器
      等一次性任务
    */
    console.log("componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    /*
      React特定：父组件更新，一定会导致子组件重新渲染

      性能优化：减少组件重复的渲染
        返回值true就会重新渲染
        返回值false就不会渲染
    */
    console.log("shouldComponentUpdate");
    return false;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    /*
      解绑事件
      清除定时器
      取消ajax请求...等收尾工作
    */
    console.log("componentWillUnmount");
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
