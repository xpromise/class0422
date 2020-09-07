import React, { Component } from "react";

export default class B extends Component {
  render() {
    const { count } = this.props;
    return (
      <header>
        <h1>title~~~</h1>
        <p>count: {count}</p>
      </header>
    );
  }
}
