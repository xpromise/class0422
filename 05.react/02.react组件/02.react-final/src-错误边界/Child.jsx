import React, { Component } from "react";

export default class Child extends Component {
  componentDidMount() {}

  handleClick = () => {
    function fn() {}
    fn()();
  };

  render() {
    return <div onClick={this.handleClick}>Child...</div>;
  }
}
