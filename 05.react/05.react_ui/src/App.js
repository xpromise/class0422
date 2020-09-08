import React, { Component } from "react";
import { Button, Toast } from "antd-mobile";

export default class App extends Component {
  handleClick = () => {
    Toast.success("成功了~");
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
