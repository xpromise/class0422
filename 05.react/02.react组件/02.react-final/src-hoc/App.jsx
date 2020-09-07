import React, { Component } from "react";

import Login from "./Login";
import Register from "./Register";

export default class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Register />
      </div>
    );
  }
}
