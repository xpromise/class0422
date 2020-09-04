import React, { Component } from "react";
import PropTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  };

  render() {
    // 读取props数据
    const { todos } = this.props;

    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" />
                <span>{todo.content}</span>
              </label>
              <button className="btn btn-danger" style={{ display: "none" }}>
                删除
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
