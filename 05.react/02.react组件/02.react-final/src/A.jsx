import React, { Component } from "react";

export default class A extends Component {
  state = {
    count: 1,
  };

  render() {
    // const { children } = this.props;
    const { render } = this.props;

    return (
      <div>
        A...
        {render({ count: this.state.count })}
      </div>
    );
  }
}
