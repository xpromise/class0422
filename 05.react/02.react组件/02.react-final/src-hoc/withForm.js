import React, { Component } from "react";
/*
 HOC High Order Component 高阶组件
  本质上是一个函数，执行函数传入组件作为参数，返回值是一个新组件
  作用：用来复用多个组件公共代码
  例子：
    withRouter 给子组件传递路由组件的三大属性
    connect 给子组件传递redux数据
*/

// WrappedComponent 接受组件参数
export default function withForm(WrappedComponent) {
  // 返回值是一个新组件
  return class extends Component {
    // 给组件取名称，方便调试
    // 优先级更高
    static displayName = `Form(${
      WrappedComponent.displayName || WrappedComponent.name || "Component"
    })`;

    state = {
      username: "",
      password: "",
    };

    change = (stateKey) => {
      return (e) => {
        this.setState({
          [stateKey]: e.target.value.trim(),
        });
      };
    };

    submit = (e) => {
      e.preventDefault();
      console.log(this.state);
    };

    render() {
      return <WrappedComponent change={this.change} submit={this.submit} />;
    }
  };
}
