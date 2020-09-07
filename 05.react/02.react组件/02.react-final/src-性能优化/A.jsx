import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class A extends PureComponent {
  static propTypes = {
    a: PropTypes.number.isRequired,
  };

  // 优先级更高
  // shouldComponentUpdate(nextProps) {
  //   /*
  //     判断props中b数据前后是否一致
  //       如果一致，就不更新 (所有props都相等就不更新 false)
  //       如果不一样，才需要更新 （只要有一个不相等，就要更新 true）
  //   */
  //   // console.log(this.props); // 上一次的props 还未更新的props
  //   // console.log(nextProps); // 最新的props

  //   const keys = Object.keys(nextProps);

  //   for (let i = 0; i < keys.length; i++) {
  //     const key = keys[i];
  //     if (this.props[key] !== nextProps[key]) {
  //       return true; // 更新
  //     }
  //   }


  //   return false; // 不更新
  // }

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
