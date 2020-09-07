import React, { Component } from "react";
import PropTypes from "prop-types";

export default class B extends Component {
  static propTypes = {
    b: PropTypes.number.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    /*
      判断props中b数据前后是否一致
        如果一致，就不更新 (所有props都相等就不更新 false)
        如果不一样，才需要更新 （只要有一个不相等，就要更新 true）
    */
    // console.log(this.props); // 上一次的props 还未更新的props
    // console.log(nextProps); // 最新的props

    const keys = Object.keys(nextProps);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (this.props[key] !== nextProps[key]) {
        return true; // 更新
      }
    }

    return false; // 不更新
  }

  render() {
    console.log("B组件 render");

    return (
      <div>
        <h2>B...</h2>
        <p>数据b: {this.props.b}</p>
      </div>
    );
  }
}
