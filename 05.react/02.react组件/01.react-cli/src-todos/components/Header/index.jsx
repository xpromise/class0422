import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    // console.log(event.keyCode);
    if (event.keyCode === 13) {
      // 按了enter键
      const input = event.target;
      // 收集数据
      const content = input.value.trim();
      if (!content) return;
      // 添加todo
      this.props.addTodo(content);
      // 清空数据
      input.value = "";
    }
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
