import React, { Component } from "react";

export default class App extends Component {
  handleClick = () => {
    alert("hello ~");
  };

  render() {
    return (
      <div>
        <h1>hello react server</h1>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    );
  }
}
