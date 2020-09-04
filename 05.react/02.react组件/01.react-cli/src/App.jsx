import React, { Component } from "react";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "jack~" },
      { id: 2, content: "rose~" },
    ],
  };

  id = 3;

  // 添加todo
  addTodo = (content) => {
    const { todos } = this.state;
    // 不建议操作（修改）原数据，建议产生一份新数据
    this.setState({
      todos: [{ id: this.id++, content }, ...todos],
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

  render() {
    // 读取state数据
    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} delTodo={this.delTodo}/>
          <Footer />
        </div>
      </div>
    );
  }
}
