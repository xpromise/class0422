import React, { Component, Fragment } from "react";

/*
  Fragment: 用来充当根标签
    特点：不会生成DOM结构
*/
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>App...</h1>
        <p>content...</p>
      </Fragment>
    );
  }
}
