import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

export default class B extends PureComponent {
  static propTypes = {
    b: PropTypes.number.isRequired,
  };

  state = {
    c: [{ name: "jack" }],
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   /*
  //     判断props中b数据前后是否一致
  //       如果一致，就不更新 (所有props都相等就不更新 false)
  //       如果不一样，才需要更新 （只要有一个不相等，就要更新 true）
  //   */
  //   // console.log(this.props); // 上一次的props 还未更新的props
  //   // console.log(nextProps); // 最新的props

  //   const keys = Object.keys(nextProps);
  //   const stateKeys = Object.keys(nextState);

  //   for (let i = 0; i < keys.length; i++) {
  //     const key = keys[i];
  //     if (this.props[key] !== nextProps[key]) {
  //       return true; // 更新
  //     }
  //   }

  //   for (let j = 0; j < stateKeys.length; j++) {
  //     const key = stateKeys[j];
  //     if (this.state[key] !== stateKeys[key]) {
  //       return true; // 更新
  //     }
  //   }

  //   return false; // 不更新
  // }

  handleClick = () => {
    // this.setState({
    //   c: this.state.c + 1,
    // });
    // 不能更新原数据，必须返回新数据
    // this.state.c.push({ name: "rose" });

    this.setState({
      c: [...this.state.c, { name: "rose" }],
    });
  };

  render() {
    console.log("B组件 render");

    const { c } = this.state;

    return (
      <div>
        <h2>B...</h2>
        <p>数据b: {this.props.b}</p>
        <ul>
          {c.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
        <button onClick={this.handleClick}>更新c数据</button>
      </div>
    );
  }
}
