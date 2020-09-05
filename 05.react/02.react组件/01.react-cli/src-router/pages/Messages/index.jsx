import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Detail from "../Detail";

/*
  路由跳转两种方式：
    1. 路由导航链接
      Link NavLink
    2. 编程式导航
      this.props.history.push("/home/messages/1");   
*/

export default class Messages extends Component {
  push = () => {
    // 组件内部通过this.props.location.state获取
    this.props.history.push("/home/messages/1", { name: "jack", age: 18 });
  };

  replace = () => {
    this.props.history.replace("/home/messages/1");
  };

  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  render() {
    return (
      <div>
        Messages...
        <ul>
          <li>
            <Link to="/home/messages/1?name=jack">Message 001</Link>
          </li>
          <li>
            <Link to="/home/messages/3">Message 003</Link>
          </li>
          <li>
            <Link to="/home/messages/5">Message 005</Link>
          </li>
        </ul>
        <button onClick={this.push}>push</button>
        <button onClick={this.replace}>replace</button>
        <button onClick={this.back}>back</button>
        <button onClick={this.forward}>forward</button>
        <Route path="/home/messages/:id" component={Detail} />
      </div>
    );
  }
}
