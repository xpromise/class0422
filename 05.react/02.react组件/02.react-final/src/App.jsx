import React, { Component, Fragment } from "react";

import Father from "./Father";

import nameContext from "./context/nameContext";

const { Provider } = nameContext;

export default class App extends Component {
  state = {
    name: "jack",
  };

  render() {
    return (
      <Fragment>
        <h1>App...</h1>
        <Provider value={this.state.name}>
          <Father />
        </Provider>
      </Fragment>
    );
  }
}
