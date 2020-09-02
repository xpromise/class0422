import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Child extends Component {
  // static静态的 添加构造函数直接属性上
  static propTypes = {
    // 作用：对props进行类型和必要性约束
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sex: PropTypes.string, // 可选props
  };
  // 指定属性的默认值
  static defaultProps = {
    sex: '女'
  }

  // state属性添加到this实例对象直接属性
  // state = {};

  // handleClick方法添加构造函数的原型上
  // handleClick() {}

  render() {
    // console.log(this);

    const { name, age, sex } = this.props;

    return (
      <div>
        <h1>Child....</h1>
        <ul>
          <li>姓名：{name}</li>
          <li>年龄：{age}</li>
          <li>性别：{sex}</li>
        </ul>
      </div>
    );
  }
}
