import React, { Component } from "react";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "jack~", isCheck: true },
      { id: 2, content: "rose~", isCheck: false },
    ],
  };

  id = 3;

  // 添加todo
  addTodo = (content) => {
    const { todos } = this.state;
    // 不建议操作（修改）原数据，建议产生一份新数据
    this.setState({
      todos: [{ id: this.id++, content, isCheck: false }, ...todos],
    });
  };

  // 删除todo
  delTodo = (id) => {
    const { todos } = this.state;
    // 不建议操作（修改）原数据，建议产生一份新数据
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  // 全选/全不选
  checkAllTodos = (isCheckAll) => {
    const { todos } = this.state;
    // 不建议操作（修改）原数据，建议产生一份新数据
    this.setState({
      todos: todos.map((todo) => {
        return {
          ...todo,
          isCheck: isCheckAll,
        };
      }),
    });
  };

  // 单选
  checkTodo = (id) => {
    const { todos } = this.state;
    // 不建议操作（修改）原数据，建议产生一份新数据
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCheck: !todo.isCheck,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    // 读取state数据
    const { todos } = this.state;

    // 计算选中的数量
    const isCheckNum = todos.reduce((p, c) => {
      return p + (c.isCheck ? 1 : 0);
    }, 0);

    // todos的总数
    const total = todos.length;

    // 是否全选
    const isCheckAll = isCheckNum === total;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            delTodo={this.delTodo}
            checkTodo={this.checkTodo}
          />
          <Footer
            isCheckAll={isCheckAll}
            checkAllTodos={this.checkAllTodos}
            isCheckNum={isCheckNum}
            total={total}
          />
        </div>
      </div>
    );
  }
}
