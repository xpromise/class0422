import React, { Component } from "react";
// import React from "react";
// import { Component } from "react";

/*
  组件三大属性之一 state 状态
    1. 作用：用来控制用户界面的变化
    2. 使用：
      初始化状态数据  
        state = {
          isLikeMe: true,
        };
      读取状态数据 
        this.state.isLikeMe
      更新状态数据（即会更新状态数据，也会更新用户界面）
        this.setState({ isLikeMe: xxx })  
*/

export default class App extends Component {
  // constructor() {
  //   super(); // 调用父类的构造方法 Component类上的constructor方法

  // 初始化状态
  // console.log(this); // 组件实例对象
  // this.state = {
  //   isLikeMe: true,
  // };

  // 改变函数的this指向
  // const handleClick = this.handleClick.bind(this);
  // this.handleClick = handleClick;
  // this.handleClick = this.handleClick.bind(this);

  // console.log(this);
  // }

  // 简写
  state = {
    isLikeMe: true,
  };

  // 在React中，除了生命周期函数以外，其他自定义函数的this默认都是undefined
  // 在构造函数的显示原型属性上，实例对象通过__proto__得到
  handleClick = () => {
    this.setState({
      isLikeMe: !this.state.isLikeMe,
    });
  };

  render() {
    // console.log(this); // 组件实例对象
    // 读取状态数据
    const isLikeMe = this.state.isLikeMe;

    const content = isLikeMe ? "你喜欢我~" : "我喜欢你~";

    // 问题：更新时会反复重新创建，性能不好~
    // const handleClick = () => {
    //   // 更新状态
    //   // console.log(this);
    //   this.setState({
    //     isLikeMe: !this.state.isLikeMe,
    //   });
    // };

    // 采用小驼峰命名法绑定DOM事件 onXxx
    return <h1 onClick={this.handleClick}>{content}</h1>;
  }
}
