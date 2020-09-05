import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  static propTypes = {
    getSearchName: PropTypes.func.isRequired,
  };

  state = {
    searchName: "",
  };

  handleChange = (e) => {
    this.setState({
      searchName: e.target.value.trim(),
    });
  };

  handleClick = () => {
    const { searchName } = this.state;

    if (!searchName) {
      alert("请输入搜索名称~");
      return;
    }

    this.props.getSearchName(searchName);
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Search</button>
        </div>
      </section>
    );
  }
}
