import React, { Component, Fragment } from "react";

import Child from "./Child";

import nameContext from "./context/nameContext";

const { Consumer } = nameContext;

export default class Father extends Component {
  render() {
    return (
      <Fragment>
        <h2>Father...</h2>
        <Consumer>
          {(name) => {
            return <p>FATHER: {name}</p>;
          }}
        </Consumer>
        <Child />
      </Fragment>
    );
  }
}
