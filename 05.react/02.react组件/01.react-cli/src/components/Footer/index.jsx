import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static propTypes = {
    isCheckAll: PropTypes.bool.isRequired,
    checkAllTodos: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    isCheckNum: PropTypes.number.isRequired,
  };

  handleChange = () => {
    this.props.checkAllTodos(!this.props.isCheckAll);
  };

  render() {
    const { isCheckAll, isCheckNum, total } = this.props;

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={isCheckAll}
          />
        </label>
        <span>
          <span>已完成{isCheckNum}</span> / 全部{total}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
