import React, { Component } from "react";

import Modal from "./Modal";

export default class App extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState({
      visible: true,
    });
  };

  close = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <h1>App...</h1>
        <button onClick={this.toggle}>切换显示</button>

        <Modal title="标题~~" visible={this.state.visible} close={this.close}>
          <h1>hello</h1>
          <p>Modal</p>
        </Modal>
      </div>
    );
  }
}
