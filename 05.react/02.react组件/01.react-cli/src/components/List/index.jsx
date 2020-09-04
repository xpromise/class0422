import React, { Component } from "react";
import PropTypes from "prop-types";

import Item from "../Item";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    delTodo: PropTypes.func.isRequired,
    checkTodo: PropTypes.func.isRequired,
  };

  render() {
    // 读取props数据
    const { todos, delTodo, checkTodo } = this.props;

    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              delTodo={delTodo}
              checkTodo={checkTodo}
            />
          );
        })}
      </ul>
    );
  }
}
