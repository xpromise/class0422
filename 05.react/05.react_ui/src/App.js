import React, { Component } from "react";
import { Button } from "antd-mobile";

export default class App extends Component {
  handleClick = () => {
    message.success("提示~~~", 10);
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          按钮
        </Button>
      </div>
    );
  }
}
