import React, { Component } from "react";
import PropTypes from "prop-types";

export default class A extends Component {
  static propTypes = {
    a: PropTypes.number.isRequired,
  };

  render() {
    console.log('A组件 render');

    return (
      <div>
        <h2>A...</h2>
        <p>数据a: {this.props.a}</p>
      </div>
    );
  }
}
