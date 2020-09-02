import React, { Component } from "react";

import Child from "./Child";

/*
  组件三大属性之二 props
    1. 作用：用于父子组件通信
    2. 使用
      父组件通过标签属性属性给子组件传递数据
        <Child {...person} />
      子组件需要声明接受（对属性进行约束）
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
      子组件使用
        this.props.xxx   
*/

export default class App extends Component {
  state = {
    person: {
      name: "渊哥",
      age: 40,
      sex: "男",
    },
  };

  render() {
    // 获取state数据
    const { person } = this.state;

    return (
      <div>
        <h1>App....</h1>
        <Child name={person.name} age={person.age} sex={person.sex} />
        {/* <Child {...person} /> */}
      </div>
    );
  }
}
