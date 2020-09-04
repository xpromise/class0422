import React, { Component } from "react";

// 受控组件：通过state和onChange事件来自动收集表单数据
export default class App extends Component {
  state = {
    username: "",
    password: "",
  };

  hanldeSubmit = (e) => {
    // 禁止表单默认行为
    e.preventDefault();
    // 收集表单数据
    const { username, password } = this.state;

    console.log(username, password);
    // 清空表单数据
    this.setState({
      username: "",
      password: "",
    });
  };

  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleChange = (name) => {
    return (e) => {
      this.setState({
        [name]: e.target.value,
      });
    };
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.hanldeSubmit}>
        用户名：
        {/* <input type="text" onChange={this.handleUsername} value={username} /> */}
        <input
          type="text"
          onChange={this.handleChange("username")}
          value={username}
        />
        密码：
        <input
          type="password"
          // onChange={this.handlePassword}
          onChange={this.handleChange("password")}
          value={password}
        />
        <button type="submit">登录</button>
      </form>
    );
  }
}
