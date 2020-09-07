import React, { Component } from "react";

import nameContext from "./context/nameContext";

// const { Consumer } = nameContext;

export default class Child extends Component {
  // 声明接受数据
  // 内部通过this.context去使用
  static contextType = nameContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Child...
        {/* <Consumer>
          {(name) => {
            console.log(name);

            return <p>{name}</p>;
          }}
        </Consumer> */}
        <p>{this.context}</p>
      </div>
    );
  }
}
