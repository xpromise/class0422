import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messages: [
          { id: 1, title: "message 001", content: "message content 001" },
          { id: 3, title: "message 003", content: "message content 003" },
          { id: 5, title: "message 005", content: "message content 005" },
        ],
      });
    }, 1000);
  }

  render() {
    /*
      凡是通过Route加载的组件，我们叫做路由组件
      路由组件有三个属性props：
        location 
          pathname 当前路由路径
          state 传递参数
          search 获取query参数
        history 控制浏览器历史记录
          push / goBack...
        match
          params 获取params参数
    */
    const id = +this.props.match.params.id;

    const result =
      this.state.messages.find((message) => message.id === id) || {};

    return (
      <ul>
        <li>id: {result.id}</li>
        <li>title: {result.title}</li>
        <li>content: {result.content}</li>
      </ul>
    );
  }
}
