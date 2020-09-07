import React, { Component } from "react";

import withForm from "./withForm";

class Register extends Component {
  // state = {
  //   username: "",
  //   password: "",
  //   rePassword: "",
  // };

  // regist = (e) => {
  //   e.preventDefault();

  //   const { username, password, rePassword } = this.state;
  //   console.log(username, password, rePassword);
  // };

  // change = (stateKey) => {
  //   return (e) => {
  //     this.setState({
  //       [stateKey]: e.target.value.trim(),
  //     });
  //   };
  // };

  render() {
    const { change, submit } = this.props;

    return (
      <form onSubmit={submit}>
        用户名: <input type="text" onChange={change("username")} /> <br />
        密码: <input type="password" onChange={change("password")} /> <br />
        确认密码: <input type="password" onChange={change("rePassword")} />
        <br />
        <button type="submit">注册</button>
      </form>
    );
  }
}

export default withForm(Register);
