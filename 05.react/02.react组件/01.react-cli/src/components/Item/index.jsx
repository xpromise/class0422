import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Item extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    delTodo: PropTypes.func.isRequired,
    checkTodo: PropTypes.func.isRequired,
  };

  state = {
    isDisplay: false,
  };

  /* handleMouseEnter = () => {
    this.setState({
      isDisplay: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isDisplay: false,
    });
  }; */

  // handleMouse = () => {
  //   this.setState({
  //     isDisplay: !this.state.isDisplay,
  //   });
  // };

  // 高阶函数：执行函数返回值是一个新函数
  // 闭包典型应用场景
  // 目的：为了复用函数
  handleMouse = (isDisplay) => {
    return () => {
      this.setState({
        isDisplay,
      });
    };
  };

  handleClick = () => {
    if (window.confirm(`您是否要删除当前项?`)) {
      this.props.delTodo(this.props.todo.id);
    }
  };

  handleChange = () => {
    this.props.checkTodo(this.props.todo.id);
  };

  render() {
    const { todo } = this.props;
    const { isDisplay } = this.state;

    const handleMouseEnter = this.handleMouse(true);
    const handleMouseLeave = this.handleMouse(false);

    return (
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <label>
          <input
            type="checkbox"
            checked={todo.isCheck}
            onChange={this.handleChange}
          />
          <span>{todo.content}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: isDisplay ? "block" : "none" }}
          onClick={this.handleClick}
        >
          删除
        </button>
      </li>
    );
  }
}
