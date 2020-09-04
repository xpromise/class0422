import React, { Component } from "react";

import Child from "./Child";

export default class App extends Component {
  // constructor() {
  //   super();

  //   this.createRef = React.createRef();
  //   // console.log(this.createRef);
  // }

  createRef = React.createRef();
  childRef = React.createRef();

  handleClick = () => {
    // console.log(this.refs.stringRef.value);
    // console.log(this.funcRef.value);
    console.log(this.createRef.current.value);

    console.log(this.childRef);
  };

  handleBlur = (event) => {
    console.log(event.target.value);
  };

  /*  
    ref 
      获取DOM元素
      获取组件实例对象
    event.target
      看触发事件的元素是哪个？
        如果触发事件的元素就是要获取的元素 event.target
        如果不是 ref
  */

  render() {
    return (
      <div>
        {/* <input type="text" ref="stringRef" /> */}
        {/* <input type="text" ref={(input) => (this.funcRef = input)} /> */}
        <input type="text" ref={this.createRef} />
        <button onClick={this.handleClick}>点击按钮提示数据</button>
        <input
          type="text"
          placeholder="失去焦点提示数据"
          onBlur={this.handleBlur}
        />
        <Child ref={this.childRef} />
      </div>
    );
  }
}
