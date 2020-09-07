import React, { Component } from "react";

import withForm from "./withForm";

class Login extends Component {
  // state = {
  //   username: "",
  //   password: "",
  // };

  // login = (e) => {
  //   e.preventDefault();

  //   const { username, password } = this.state;
  //   console.log(username, password);
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
        <button type="submit">登录</button>
      </form>
    );
  }
}

const NewLogin = withForm(Login);

export default NewLogin;
